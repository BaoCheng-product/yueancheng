import React from 'react';
import { GiraffeIcon, UserIcon, WhatsAppIcon, TelegramIcon, MessageIcon, PlusIcon, PlayIcon, DietIcon, ShoppingCartIcon } from './Icons';
import { View, Language } from '../types';
import { translations } from '../translations';
import LanguageSwitcher from './LanguageSwitcher';

interface LandingPageProps {
  onNavigate: (view: View) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate, language, setLanguage }) => {
  const t = translations[language];

  return (
    <div className="bg-[#f0f7ff] min-h-screen font-sans text-gray-900 overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-8">
        {/* Header */}
        <header className="py-5 flex justify-between items-center">
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
            <button 
              onClick={() => onNavigate('profile')}
              className="p-2.5 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
            >
              <UserIcon className="w-5 h-5" />
            </button>
            <button onClick={() => onNavigate('chat')} className="font-semibold text-white bg-black rounded-full px-5 py-2.5 text-sm hover:bg-gray-800 transition-colors">
              {t.header.getStarted}
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <main className="pt-12 pb-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col space-y-8 text-center lg:text-left items-center lg:items-start">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tighter">
              {t.landing.title}
            </h1>
            <p className="text-gray-500 text-lg flex items-center space-x-3">
              <span>{t.landing.subtitle}</span>
              <WhatsAppIcon className="w-6 h-6 text-green-500" />
              <TelegramIcon className="w-6 h-6 text-blue-500" />
              <MessageIcon className="w-6 h-6 text-gray-400" />
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <button onClick={() => onNavigate('chat')} className="bg-black text-white font-semibold rounded-full px-8 py-4 flex items-center space-x-2 shadow-[0_0_20px_4px_rgba(192,132,252,0.3),_0_0_20px_4px_rgba(74,222,128,0.3)] hover:shadow-[0_0_30px_6px_rgba(192,132,252,0.4),_0_0_30px_6px_rgba(74,222,128,0.4)] transition-shadow duration-300 w-full sm:w-auto justify-center">
                <span>{t.landing.whatsappButton}</span>
                <WhatsAppIcon className="w-6 h-6 text-green-400" />
              </button>
              <button onClick={() => onNavigate('chat')} className="bg-white text-black font-semibold rounded-full px-8 py-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow w-full sm:w-auto">
                {t.landing.otherAppsButton}
              </button>
            </div>
          </div>
          <div className="relative flex justify-center items-center h-[600px] lg:h-auto">
            <div className="w-[300px] h-[610px] bg-black rounded-[48px] shadow-2xl p-2.5 transform scale-95 md:scale-100">
              <div className="bg-white w-full h-full rounded-[36px] p-4 flex flex-col space-y-3 overflow-hidden">
                <div className="self-end bg-blue-500 text-white p-3.5 rounded-3xl rounded-br-lg max-w-[90%]">
                    <div className="flex items-center space-x-2">
                        <PlayIcon className="w-7 h-7 flex-shrink-0"/>
                        <svg width="150" height="24" viewBox="0 0 150 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0" y="10" width="2" height="4" rx="1"/> <rect x="4" y="8" width="2" height="8" rx="1"/> <rect x="8" y="5" width="2" height="14" rx="1"/> <rect x="12" y="9" width="2" height="6" rx="1"/> <rect x="16" y="11" width="2" height="2" rx="1"/> <rect x="20" y="7" width="2" height="10" rx="1"/> <rect x="24" y="2" width="2" height="20" rx="1"/> <rect x="28" y="4" width="2" height="16" rx="1"/> <rect x="32" y="8" width="2" height="8" rx="1"/> <rect x="36" y="10" width="2" height="4" rx="1"/> <rect x="40" y="6" width="2" height="12" rx="1"/> <rect x="44" y="1" width="2" height="22" rx="1"/> <rect x="48" y="5" width="2" height="14" rx="1"/> <rect x="52" y="8" width="2" height="8" rx="1"/> <rect x="56" y="10" width="2" height="4" rx="1"/> <rect x="60" y="9" width="2" height="6" rx="1"/> <rect x="64" y="5" width="2" height="14" rx="1"/> <rect x="68" y="2" width="2" height="20" rx="1"/> <rect x="72" y="6" width="2" height="12" rx="1"/> <rect x="76" y="8" height="8" width="2" rx="1"/>
                          <circle cx="85" cy="12" r="2" fill="white" />
                          <rect x="91" y="11.5" width="59" height="1" fill="rgba(255,255,255,0.5)" rx="0.5"/>
                        </svg>
                    </div>
                    <p className="mt-2 text-sm leading-snug">{t.landing.mockup.voiceMessage}</p>
                </div>
                
                <div className="self-start bg-gray-100 text-gray-800 py-2 px-4 rounded-3xl rounded-bl-lg max-w-[80%] text-sm">
                    {t.landing.mockup.aiResponse}
                </div>

                <div className="bg-white p-3 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.05)] border border-gray-50">
                  <div className="flex justify-between items-center text-xs text-gray-400 mb-1">
                    <div className="flex items-center space-x-1.5">
                      <DietIcon className="w-4 h-4 text-orange-400" />
                      <span>{t.landing.mockup.dietCategory}</span>
                    </div>
                    <span>{t.landing.mockup.time}</span>
                  </div>
                  <p className="font-medium text-lg">{t.landing.mockup.lunchItem}</p>
                  <p className="font-bold text-2xl">$120</p>
                </div>

                <div className="bg-white p-3 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.05)] border border-gray-50">
                  <div className="flex justify-between items-center text-xs text-gray-400 mb-1">
                    <div className="flex items-center space-x-1.5">
                      <ShoppingCartIcon className="w-4 h-4 text-blue-400" />
                      <span>{t.landing.mockup.shoppingCategory}</span>
                    </div>
                    <span>{t.landing.mockup.time}</span>
                  </div>
                  <p className="font-medium text-lg">{t.landing.mockup.shoppingItem}</p>
                  <p className="font-bold text-2xl">$300</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <button onClick={() => onNavigate('chat')} className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-black text-white rounded-full px-5 py-3 flex items-center space-x-2 shadow-lg hover:scale-105 transition-transform z-50">
        <PlusIcon className="w-5 h-5"/>
        <span className="font-semibold text-sm">{t.landing.fab}</span>
      </button>
    </div>
  );
}

export default LandingPage;