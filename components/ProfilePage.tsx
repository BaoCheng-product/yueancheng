import React from 'react';
import { GiraffeIcon, UserIcon, BellIcon, ChevronRightIcon, GeneralIcon, InfoIcon, SignOutIcon, PlusIcon } from './Icons';
import { View, Language } from '../types';
import { translations } from '../translations';
import LanguageSwitcher from './LanguageSwitcher';


interface ProfilePageProps {
  onNavigate: (view: View) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ onNavigate, language, setLanguage }) => {
  const t = translations[language];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
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
                <button className="p-2.5 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                    <UserIcon className="w-5 h-5" />
                </button>
                <button onClick={() => onNavigate('chat')} className="font-semibold text-white bg-black rounded-full px-5 py-2.5 text-sm hover:bg-gray-800 transition-colors">
                    {t.header.getStarted}
                </button>
            </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center mb-10">
            <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                <UserIcon className="w-12 h-12 text-blue-600" />
              </div>
              <span className="absolute bottom-0 right-0 block h-6 w-6 rounded-full bg-orange-400 border-2 border-white"></span>
            </div>
            <h1 className="text-2xl font-bold">Melodykakaka</h1>
            <p className="text-gray-500">746326274@gmail.com</p>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-purple-800 p-8 rounded-2xl text-white flex justify-between items-center mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <BellIcon className="w-6 h-6" />
                <h2 className="font-bold text-xl">{t.profile.premium.title}</h2>
              </div>
              <p className="text-purple-200">{t.profile.premium.subtitle}</p>
            </div>
            <button className="font-semibold flex items-center space-x-2">
              <span>{t.profile.premium.button}</span>
              <span className="text-xl">→</span>
            </button>
          </div>

          <div className="space-y-4">
            <a href="#" onClick={(e) => {e.preventDefault(); onNavigate('account')}} className="flex justify-between items-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center space-x-4">
                <UserIcon className="w-6 h-6 text-gray-500" />
                <span className="font-medium">{t.settings.account}</span>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-400" />
            </a>
            <a href="#" onClick={(e) => {e.preventDefault(); onNavigate('general')}} className="flex justify-between items-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center space-x-4">
                <GeneralIcon className="w-6 h-6 text-gray-500" />
                <span className="font-medium">{t.settings.general}</span>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-400" />
            </a>
            <a href="#" onClick={(e) => {e.preventDefault(); onNavigate('about')}} className="flex justify-between items-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center space-x-4">
                <InfoIcon className="w-6 h-6 text-gray-500" />
                <span className="font-medium">{t.settings.about}</span>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-gray-400" />
            </a>
          </div>

          <div className="mt-8">
             <a href="#" className="flex justify-between items-center p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center space-x-4">
                <SignOutIcon className="w-6 h-6 text-red-500" />
                <span className="font-medium text-red-500">{t.settings.signOut}</span>
              </div>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 sm:px-8 py-10 mt-12 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <GiraffeIcon className="w-8 h-8" />
            <span className="font-bold text-xl">ChatGiraffe</span>
          </div>
          <div className="flex items-center space-x-6 text-gray-500 mb-6 md:mb-0">
             {/* Add Social Icons Here */}
          </div>
          <p className="text-gray-400 text-sm">{t.footer.copyright}</p>
        </div>
         <div className="flex justify-center md:justify-start space-x-6 mt-6 text-sm text-gray-500">
            <a href="#" className="hover:text-black">{t.footer.terms}</a>
            <a href="#" className="hover:text-black">{t.footer.privacy}</a>
        </div>
      </footer>
      
      <button onClick={() => onNavigate('chat')} className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-black text-white rounded-full px-5 py-3 flex items-center space-x-2 shadow-lg hover:scale-105 transition-transform z-50">
        <PlusIcon className="w-5 h-5"/>
        <span className="font-semibold text-sm">{t.landing.fab}</span>
      </button>

    </div>
  );
};

export default ProfilePage;
