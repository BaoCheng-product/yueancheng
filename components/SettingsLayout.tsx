import React from 'react';
import { GiraffeIcon, UserIcon, GeneralIcon, InfoIcon, SignOutIcon, PlusIcon } from './Icons';
import { View, Language } from '../types';
import { translations } from '../translations';
import LanguageSwitcher from './LanguageSwitcher';


interface SettingsLayoutProps {
  children: React.ReactNode;
  activeView: 'account' | 'about' | 'general';
  onNavigate: (view: View) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const SettingsLayout: React.FC<SettingsLayoutProps> = ({ children, activeView, onNavigate, language, setLanguage }) => {
  const t = translations[language];
  
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-8 py-5 flex justify-between items-center">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('landing')}>
                <GiraffeIcon className="w-10 h-10" />
                <span className="font-bold text-2xl tracking-tighter">ChatGiraffe</span>
            </div>
            <nav className="hidden lg:flex items-center space-x-8 text-gray-600 font-medium">
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('landing'); }} className="hover:text-gray-900 transition-colors">{t.header.home}</a>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gray-900 transition-colors">{t.header.article}</a>
                <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gray-900 transition-colors">{t.header.pricing}</a>
            </nav>
            <div className="flex items-center space-x-2 sm:space-x-4">
                <LanguageSwitcher language={language} setLanguage={setLanguage} />
                <button onClick={() => onNavigate('profile')} className="p-2.5 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                    <UserIcon className="w-5 h-5" />
                </button>
                <button onClick={() => onNavigate('chat')} className="font-semibold text-white bg-black rounded-full px-5 py-2.5 text-sm hover:bg-gray-800 transition-colors">
                    {t.header.getStarted}
                </button>
            </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-8 py-12">
        <div className="lg:flex lg:space-x-12">
          {/* Sidebar */}
          <aside className="lg:w-1/4 mb-12 lg:mb-0">
            <nav className="space-y-2">
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('account'); }} className={`flex items-center p-3 rounded-lg font-medium ${activeView === 'account' ? 'bg-gray-100 text-black' : 'text-gray-500 hover:bg-gray-100'}`}>
                <UserIcon className="w-5 h-5 mr-3" />
                <span>{t.settings.account}</span>
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('general'); }} className={`flex items-center p-3 rounded-lg font-medium ${activeView === 'general' ? 'bg-gray-100 text-black' : 'text-gray-500 hover:bg-gray-100'}`}>
                <GeneralIcon className="w-5 h-5 mr-3" />
                <span>{t.settings.general}</span>
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className={`flex items-center p-3 rounded-lg font-medium ${activeView === 'about' ? 'bg-gray-100 text-black' : 'text-gray-500 hover:bg-gray-100'}`}>
                <InfoIcon className="w-5 h-5 mr-3" />
                <span>{t.settings.about}</span>
              </a>
            </nav>
            <div className="mt-8 bg-gradient-to-r from-blue-900 to-purple-800 p-6 rounded-2xl text-white">
                <h3 className="font-bold text-lg">{t.profile.premium.subtitle}</h3>
                <p className="text-sm text-purple-200 mt-1 mb-4">{t.profile.premium.button}</p>
                <button className="font-semibold flex items-center space-x-2 text-sm">
                    <span>{t.profile.premium.button}</span>
                    <span className="text-lg">→</span>
                </button>
            </div>
            <div className="mt-8">
                <a href="#" className="flex items-center p-3 rounded-lg text-gray-500 hover:bg-gray-100 font-medium">
                    <SignOutIcon className="w-5 h-5 mr-3" />
                    <span>{t.settings.signOut}</span>
                </a>
            </div>
          </aside>
          {/* Page Content */}
          <main className="lg:w-3/4">
            {children}
          </main>
        </div>
      </div>
      
      <button onClick={() => onNavigate('chat')} className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-black text-white rounded-full px-5 py-3 flex items-center space-x-2 shadow-lg hover:scale-105 transition-transform z-50">
        <PlusIcon className="w-5 h-5"/>
        <span className="font-semibold text-sm">{t.landing.fab}</span>
      </button>
    </div>
  );
};

export default SettingsLayout;
