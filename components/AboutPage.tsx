import React from 'react';
import SettingsLayout from './SettingsLayout';
import { TiktokIcon, TwitterIcon, InstagramIcon, FacebookIcon, ExternalLinkIcon } from './Icons';
import { View, Language } from '../types';
import { translations } from '../translations';


interface AboutPageProps {
  onNavigate: (view: View) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, language, setLanguage }) => {
  const t = translations[language];

  return (
    <SettingsLayout activeView="about" onNavigate={onNavigate} language={language} setLanguage={setLanguage}>
        <h1 className="text-2xl font-bold mb-8">{t.settings.about}</h1>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-8">
            <div>
                <h3 className="font-semibold mb-4">{t.about.followUs}</h3>
                <div className="flex items-center p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4 text-gray-600">
                       <a href="#" className="hover:text-black"><TiktokIcon className="w-6 h-6" /></a>
                       <a href="#" className="hover:text-black"><TwitterIcon className="w-6 h-6" /></a>
                       <a href="#" className="hover:text-black"><InstagramIcon className="w-6 h-6" /></a>
                       <a href="#" className="hover:text-black"><FacebookIcon className="w-6 h-6" /></a>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="font-semibold mb-4">{t.about.contactUs}</h3>
                <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                    <p className="text-sm text-gray-600">{t.about.contactDescription}</p>
                    <button className="font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">{t.about.feedbackButton}</button>
                </div>
            </div>

            <div>
                <h3 className="font-semibold mb-4">{t.about.termsTitle}</h3>
                <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg">
                    <a href="#" className="flex items-center space-x-2 font-medium text-blue-600 hover:underline">
                        <span>{t.footer.terms}</span>
                        <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                     <a href="#" className="flex items-center space-x-2 font-medium text-blue-600 hover:underline">
                        <span>{t.footer.privacy}</span>
                        <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                </div>
            </div>

        </div>
    </SettingsLayout>
  );
};

export default AboutPage;
