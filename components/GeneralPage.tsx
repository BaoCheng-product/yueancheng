import React, { useState } from 'react';
import SettingsLayout from './SettingsLayout';
import { View, Language } from '../types';
import { translations } from '../translations';

interface GeneralPageProps {
  onNavigate: (view: View) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const GeneralPage: React.FC<GeneralPageProps> = ({ onNavigate, language, setLanguage }) => {
  const [currency, setCurrency] = useState('cny');
  const t = translations[language];

  return (
    <SettingsLayout activeView="general" onNavigate={onNavigate} language={language} setLanguage={setLanguage}>
      <h1 className="text-2xl font-bold mb-8">{t.settings.general}</h1>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
        <div className="flex justify-between items-center py-2">
          <span className="font-medium text-gray-700">{t.general.language}</span>
          <div className="relative">
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="appearance-none bg-gray-100 border-none rounded-md py-2 pl-3 pr-8 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="en">English</option>
              <option value="zh">简体中文</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100"></div>
        
        <div className="flex justify-between items-center py-2">
          <span className="font-medium text-gray-700">{t.general.defaultCurrency}</span>
           <div className="relative">
            <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="appearance-none bg-gray-100 border-none rounded-md py-2 pl-3 pr-8 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Object.entries(t.general.currencyOptions).map(([code, name]) => (
                <option key={code} value={code}>{name}</option>
              ))}
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

export default GeneralPage;