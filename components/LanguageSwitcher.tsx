import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../translations';

interface LanguageSwitcherProps {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ language, setLanguage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const t = translations[language];

    const currentLanguageName = language === 'en' ? 'English' : '简体中文';

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const selectLanguage = (lang: Language) => {
        setLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={wrapperRef}>
            <button 
                onClick={() => setIsOpen(prev => !prev)}
                className="hidden md:flex items-center space-x-1 text-gray-600 font-medium"
            >
                <span>{currentLanguageName}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200/50 py-2 z-50">
                    <div 
                        onClick={() => selectLanguage('zh')}
                        className={`cursor-pointer p-3 text-sm flex justify-between items-center mx-2 my-1 rounded-md ${language === 'zh' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                    >
                        <div>
                            <p className="font-semibold">简体中文</p>
                            <p className={language === 'zh' ? 'text-gray-300' : 'text-gray-500'}>Chinese (Simplified)</p>
                        </div>
                    </div>
                     <div 
                        onClick={() => selectLanguage('en')}
                        className={`cursor-pointer p-3 text-sm flex justify-between items-center mx-2 my-1 rounded-md ${language === 'en' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                    >
                        <div>
                            <p className="font-semibold">English</p>
                            <p className={language === 'en' ? 'text-gray-300' : 'text-gray-500'}>English</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
