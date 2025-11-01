import React from 'react';
import SettingsLayout from './SettingsLayout';
import { UserIcon, WhatsAppIcon, GoogleIcon, AppleIcon } from './Icons';
import { View, Language } from '../types';
import { translations } from '../translations';


interface AccountPageProps {
  onNavigate: (view: View) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const AccountPage: React.FC<AccountPageProps> = ({ onNavigate, language, setLanguage }) => {
  const t = translations[language];

  return (
    <SettingsLayout activeView="account" onNavigate={onNavigate} language={language} setLanguage={setLanguage}>
      <h1 className="text-2xl font-bold mb-8">{t.settings.account}</h1>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <div className="flex items-center mb-8">
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                <UserIcon className="w-8 h-8 text-blue-600" />
              </div>
              <span className="absolute bottom-0 right-0 block h-5 w-5 rounded-full bg-orange-400 border-2 border-white"></span>
            </div>
            <div className="ml-4">
                <h2 className="font-bold">Melodykakaka</h2>
                <p className="text-gray-500 text-sm">746326274@gmail.com</p>
            </div>
        </div>

        <div className="space-y-4 mb-10">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-500">{t.account.name}</span>
                <span className="font-medium">Melodykakaka</span>
            </div>
            <div className="flex justify-between items-center py-2">
                <span className="text-gray-500">{t.account.email}</span>
                <span className="font-medium">746326274@gmail.com</span>
            </div>
        </div>

        <div>
            <h3 className="font-semibold mb-4">{t.account.connectedAccounts}</h3>
            <div className="space-y-3">
                <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <WhatsAppIcon className="w-6 h-6 text-green-500" />
                        <span className="font-medium">WhatsApp</span>
                    </div>
                    <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">{t.account.connected}</span>
                </div>
                 <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <GoogleIcon className="w-6 h-6" />
                        <span className="font-medium">Google</span>
                    </div>
                    <button className="text-sm font-semibold text-blue-600 hover:text-blue-800">{t.account.connect}</button>
                </div>
                 <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                        <AppleIcon className="w-6 h-6" />
                        <span className="font-medium">Apple</span>
                    </div>
                    <button className="text-sm font-semibold text-blue-600 hover:text-blue-800">{t.account.connect}</button>
                </div>
            </div>
            <p className="text-xs text-gray-400 mt-3">{t.account.connectHint}</p>
        </div>

        <div className="mt-10">
            <h3 className="font-semibold mb-2">{t.account.feedback}</h3>
            <div className="relative">
                <select className="w-full appearance-none bg-gray-100 border border-gray-200 rounded-lg p-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>{t.account.feedbackPrompt}</option>
                    <option>{t.account.feedbackOptions.verySatisfied}</option>
                    <option>{t.account.feedbackOptions.satisfied}</option>
                    <option>{t.account.feedbackOptions.neutral}</option>
                    <option>{t.account.feedbackOptions.unsatisfied}</option>
                    <option>{t.account.feedbackOptions.veryUnsatisfied}</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
        </div>
      </div>
    </SettingsLayout>
  );
};

export default AccountPage;
