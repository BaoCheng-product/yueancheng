import React, { useState, useEffect, useRef, MouseEvent, useCallback } from 'react';
import { GiraffeIcon, CloseIcon, MicIcon, PaperclipIcon, ArrowUpIcon, UserIcon, RecordingIcon } from './Icons';
import { Message, View, Language } from '../types';
import { Chat, Part } from '@google/genai';
import { startChat } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { translations } from '../translations';

interface ChatPageProps {
  onNavigate: (view: View) => void;
  language: Language;
}

const ChatPage: React.FC<ChatPageProps> = ({ onNavigate, language }) => {
    const [chat, setChat] = useState<Chat | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const isLoadingRef = useRef(false); // Ref to track loading state to prevent re-render loops
    
    // Image upload state
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Voice recording state
    const [isRecording, setIsRecording] = useState(false);
    const [micPermission, setMicPermission] = useState<'prompt' | 'granted' | 'denied'>('prompt');
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    
    // Press and hold state
    const [isPressingMic, setIsPressingMic] = useState(false);
    const [cancelVoice, setCancelVoice] = useState(false);
    const [micTooltip, setMicTooltip] = useState({ show: false, text: '' });
    const startY = useRef(0);

    const isInitialMessageSent = useRef(false);


    const messagesEndRef = useRef<HTMLDivElement>(null);
    const t = translations[language];
    
    const fileToGenerativePart = async (file: File) => {
        const base64EncodedDataPromise = new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
          reader.readAsDataURL(file);
        });
        return {
          inlineData: {
            data: await base64EncodedDataPromise,
            mimeType: file.type,
          },
        };
    };

    const handleSendMessage = useCallback(async (content: string, imageFile: File | null) => {
        if ((!content.trim() && !imageFile) || isLoadingRef.current || !chat) return;

        isLoadingRef.current = true;
        setIsLoading(true);

        const userMessage: Message = { 
            id: Date.now().toString(), 
            role: 'user', 
            content,
            imageUrl: imagePreview, // Use the preview URL for display
        };
        const modelMessageId = (Date.now() + 1).toString();
        const modelProcessingMessage: Message = { id: modelMessageId, role: 'model', content: '', status: 'processing' };
        
        setMessages(prev => [...prev, userMessage, modelProcessingMessage]);
        setInput('');
        setImage(null);
        setImagePreview(null);

        try {
            const parts: Part[] = [];
            if (imageFile) {
                const imagePart = await fileToGenerativePart(imageFile);
                parts.push(imagePart);
            }
            if (content) {
                parts.push({ text: content });
            }

            const stream = await chat.sendMessageStream({ message: parts });

            let fullResponse = '';
            for await (const chunk of stream) {
                fullResponse += chunk.text;
                setMessages(prev => prev.map(msg => 
                    msg.id === modelMessageId ? { ...msg, content: fullResponse } : msg
                ));
            }
            setMessages(prev => prev.map(msg => 
                msg.id === modelMessageId ? { ...msg, status: 'final' } : msg
            ));

        } catch (error) {
            console.error(error);
            const errorMessage = t.chat.errorMessage;
             setMessages(prev => prev.map(msg => 
                msg.id === modelMessageId ? { ...msg, content: errorMessage, status: 'final' } : msg
            ));
        } finally {
            isLoadingRef.current = false;
            setIsLoading(false);
        }
    }, [chat, imagePreview, t.chat.errorMessage]);

    useEffect(() => {
        setChat(startChat([]));
    }, []);

    useEffect(() => {
        if (chat && messages.length === 0 && !isInitialMessageSent.current) {
            isInitialMessageSent.current = true;
            handleSendMessage("你好ChatGiraffe，让我们开始吧😊。时区“Asia/Shanghai”，语言“Chinese”，默认货币“CNY”日期：“25/10/31”", null);
        }
    }, [chat, messages.length, handleSendMessage]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);


    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSendMessage(input, image);
    };

    const handlePaperclipClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
        if (e.target) {
            e.target.value = '';
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
        setImagePreview(null);
    };

    const startRecording = (stream: MediaStream) => {
        mediaRecorderRef.current = new MediaRecorder(stream);
        audioChunksRef.current = [];
        
        mediaRecorderRef.current.ondataavailable = event => {
            audioChunksRef.current.push(event.data);
        };

        mediaRecorderRef.current.onstop = () => {
            if (cancelVoice) {
                setCancelVoice(false);
                return;
            }
            const transcribedText = t.chat.mockTranscription;
            handleSendMessage(transcribedText, null);
        };

        mediaRecorderRef.current.start();
        setIsRecording(true);
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
            mediaRecorderRef.current.stop();
        }
        setIsRecording(false);
    };

    const requestMicPermission = async () => {
        if (micPermission === 'denied') {
             alert(t.chat.micPermissionDeniedAlert);
             return null;
        }
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            setMicPermission('granted');
            return stream;
        } catch (error) {
            console.error("Microphone access denied:", error);
            setMicPermission('denied');
            alert(t.chat.micPermissionRequiredAlert);
            return null;
        }
    }

    const handleMicMouseDown = async (e: MouseEvent<HTMLButtonElement>) => {
        setIsPressingMic(true);
        startY.current = e.clientY;
        
        const stream = await requestMicPermission();
        if (stream) {
            startRecording(stream);
            setMicTooltip({ show: true, text: t.chat.micTooltip.releaseToSend });
        }
    };

    const handleMicMouseUp = () => {
        if (!isPressingMic) return;
        setIsPressingMic(false);
        setMicTooltip({ show: false, text: '' });
        stopRecording();
    };

    const handleMicMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        if (!isPressingMic) return;
        const deltaY = startY.current - e.clientY;
        if (deltaY > 50) { // Cancellation threshold
            setCancelVoice(true);
            setMicTooltip({ show: true, text: t.chat.micTooltip.releaseToCancel });
        } else {
            setCancelVoice(false);
            setMicTooltip({ show: true, text: t.chat.micTooltip.releaseToSend });
        }
    };

    const getMicButtonTooltip = () => {
        if (micPermission === 'denied') return t.chat.micPermissionTooltip;
        return t.chat.voiceAccounting;
    };
    
    const isSendDisabled = (!input.trim() && !image) || isLoading || isRecording;

    return (
        <div className="flex flex-col h-screen bg-white font-sans">
            <header className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
                <div className="flex items-center space-x-2">
                    <span className="text-gray-800 font-medium">Chat Giraffe</span>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">Beta</span>
                </div>
                <button onClick={() => onNavigate('landing')} className="text-gray-500 hover:text-gray-800">
                    <CloseIcon className="w-6 h-6" />
                </button>
            </header>

            <main className="flex-1 overflow-y-auto p-4 md:p-8">
                <div className="max-w-3xl mx-auto">
                    {messages.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center text-gray-600 mt-16">
                            <GiraffeIcon className="w-16 h-16 mb-4" />
                            <h1 className="text-2xl font-bold text-gray-800 mb-2">{t.chat.welcome.title}</h1>
                            <p>{t.chat.welcome.subtitle1}</p>
                            <p>{t.chat.welcome.subtitle2}</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex items-start gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                                     <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'model' ? 'bg-blue-500' : 'bg-gray-200'}`}>
                                        {msg.role === 'model' ? <GiraffeIcon className="w-8 h-8 p-1" /> : <UserIcon className="w-5 h-5 text-gray-600" />}
                                    </div>
                                    <div className={`p-3 rounded-lg max-w-xl prose prose-sm ${msg.role === 'user' ? 'bg-gray-100 text-gray-800' : 'bg-gray-50 text-gray-800'}`}>
                                        {msg.imageUrl && (
                                            <img src={msg.imageUrl} alt="User upload" className="mt-2 rounded-lg max-w-xs mb-2" />
                                        )}
                                        {msg.role === 'model' && msg.status === 'processing' && !msg.content ? (
                                            <span>{t.chat.thinking}</span>
                                        ) : (
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                    )}
                </div>
            </main>

            <footer className="p-4 md:p-6 border-t border-gray-200 bg-white flex-shrink-0">
                <form onSubmit={handleFormSubmit} className="max-w-3xl mx-auto relative">
                     {micTooltip.show && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-800 text-white text-sm rounded-md shadow-lg">
                            {micTooltip.text}
                        </div>
                    )}
                    {imagePreview && (
                        <div className="relative mb-2 w-24 h-24 p-1 border border-gray-200 rounded-lg">
                            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-md" />
                            <button 
                                type="button" 
                                onClick={handleRemoveImage}
                                className="absolute -top-2 -right-2 bg-gray-700 text-white rounded-full p-0.5 hover:bg-black"
                                aria-label="Remove image"
                            >
                                <CloseIcon className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                    <div className="relative flex items-center bg-gray-100 rounded-lg p-1">
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            accept="image/*"
                            style={{ display: 'none' }}
                        />
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    handleFormSubmit(e);
                                }
                            }}
                            placeholder={isRecording ? t.chat.listening : t.chat.placeholder}
                            rows={1}
                            className="flex-1 bg-transparent px-3 py-2 text-gray-800 placeholder-gray-500 focus:outline-none resize-none"
                            style={{maxHeight: '100px'}}
                            disabled={isLoading || isRecording}
                        />
                        <div className="flex items-center space-x-1">
                            <button 
                                type="button" 
                                onClick={handlePaperclipClick} 
                                className="p-2 text-gray-500 hover:text-gray-800 disabled:text-gray-300 disabled:cursor-not-allowed" 
                                disabled={isLoading || isRecording || !!image}
                                title="Attach image"
                            >
                               <PaperclipIcon className="w-5 h-5" />
                            </button>
                            <button 
                                type="button" 
                                className="p-2 text-gray-500 hover:text-gray-800 disabled:cursor-not-allowed disabled:text-gray-300" 
                                disabled={isLoading || !!image} 
                                onMouseDown={handleMicMouseDown}
                                onMouseUp={handleMicMouseUp}
                                onMouseMove={handleMicMouseMove}
                                onMouseLeave={handleMicMouseUp} // Cancel if mouse leaves
                                title={getMicButtonTooltip()}
                            >
                                {isRecording ? <RecordingIcon className="w-5 h-5 text-red-500" /> : <MicIcon className="w-5 h-5" />}
                            </button>
                            <button type="submit" disabled={isSendDisabled} className={`p-1.5 rounded-md transition-colors ${isSendDisabled ? 'bg-gray-200 text-gray-500' : 'bg-black text-white'}`}>
                                <ArrowUpIcon className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </form>
            </footer>
        </div>
    );
}

export default ChatPage;