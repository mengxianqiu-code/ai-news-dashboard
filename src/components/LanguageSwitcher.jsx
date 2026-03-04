// Language switcher component
import React from 'react';
import { useApp } from '../context/AppContext';

const LANGUAGES = [
  { code: 'zh', label: '中文' },
  { code: 'en', label: 'EN' },
  { code: 'ko', label: '한국어' }
];

function LanguageSwitcher() {
  const { language, setLanguage } = useApp();

  return (
    <div className="flex gap-1">
      {LANGUAGES.map(lang => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
            language === lang.code
              ? 'bg-white text-blue-900 font-bold'
              : 'bg-blue-700 text-white hover:bg-blue-600'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
