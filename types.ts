export type MessageRole = 'user' | 'model';
export type MessageStatus = 'final' | 'processing';

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  status?: MessageStatus;
  imageUrl?: string;
}

export interface ChatSession {
  id: string;
  title: string;
  messages: Message[];
}

export type View = 'landing' | 'chat' | 'profile' | 'account' | 'about' | 'general';
export type Language = 'en' | 'zh';
