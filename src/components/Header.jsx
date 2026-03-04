// Header component with title, month selector and language switcher
import React from 'react';
import { useApp } from '../context/AppContext';
import LanguageSwitcher from './LanguageSwitcher';

const MONTHS = Array.from({ length: 12 }, (_, i) => i + 1);
const YEARS = Array.from({ length: 6 }, (_, i) => 2023 + i);

function Header() {
  const { t, currentYear, setCurrentYear, currentMonth, setCurrentMonth } = useApp();

  return (
    <header className="bg-blue-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">
        {/* Title */}
        <h1 className="text-xl font-bold tracking-wide">{t.appTitle}</h1>

        {/* Month & Year Selector + Language */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <select
              value={currentYear}
              onChange={e => setCurrentYear(Number(e.target.value))}
              className="bg-blue-800 text-white border border-blue-600 rounded px-2 py-1 text-sm"
            >
              {YEARS.map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
            <select
              value={currentMonth}
              onChange={e => setCurrentMonth(Number(e.target.value))}
              className="bg-blue-800 text-white border border-blue-600 rounded px-2 py-1 text-sm"
            >
              {MONTHS.map(m => (
                <option key={m} value={m}>{String(m).padStart(2, '0')}</option>
              ))}
            </select>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
