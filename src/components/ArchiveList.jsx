// Archive sidebar component showing all saved months
import React from 'react';
import { useApp } from '../context/AppContext';

function ArchiveList() {
  const { t, archivedMonths, currentKey, selectMonth } = useApp();

  return (
    <aside className="w-48 flex-shrink-0">
      <h2 className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-3 px-2">
        {t.archive}
      </h2>
      <ul className="space-y-1">
        {archivedMonths.map(key => (
          <li key={key}>
            <button
              onClick={() => selectMonth(key)}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                key === currentKey
                  ? 'bg-blue-900 text-white font-bold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {key}
            </button>
          </li>
        ))}
        {archivedMonths.length === 0 && (
          <li className="text-gray-400 text-sm px-2">-</li>
        )}
      </ul>
    </aside>
  );
}

export default ArchiveList;
