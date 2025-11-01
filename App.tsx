import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import ChatPage from './components/ChatPage';
import ProfilePage from './components/ProfilePage';
import AccountPage from './components/AccountPage';
import AboutPage from './components/AboutPage';
import GeneralPage from './components/GeneralPage';
import { View, Language } from './types';

const App: React.FC = () => {
    const [view, setView] = useState<View>('landing');
    const [language, setLanguage] = useState<Language>(() => {
        const savedLang = localStorage.getItem('chatGiraffe-language');
        return (savedLang === 'en' || savedLang === 'zh') ? savedLang : 'zh';
    });

    useEffect(() => {
        localStorage.setItem('chatGiraffe-language', language);
    }, [language]);

    const navigateTo = (newView: View) => setView(newView);

    const renderView = () => {
        const props = {
            onNavigate: navigateTo,
            language,
            setLanguage
        };
        switch (view) {
            case 'chat':
                return <ChatPage onNavigate={navigateTo} language={language} />;
            case 'profile':
                return <ProfilePage {...props} />;
            case 'account':
                return <AccountPage {...props} />;
            case 'about':
                return <AboutPage {...props} />;
            case 'general':
                return <GeneralPage {...props} />;
            case 'landing':
            default:
                return <LandingPage {...props} />;
        }
    };

    return <div className="min-h-screen bg-white">{renderView()}</div>;
}

export default App;