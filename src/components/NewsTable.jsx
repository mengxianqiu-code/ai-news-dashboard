// Main news table component
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import NewsEditor from './NewsEditor';

function NewsTable() {
  const { t, currentItems, currentYear, currentMonth, deleteItem, toggleHighlight } = useApp();
  const [editItem, setEditItem] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

  const sortedItems = [...currentItems].sort((a, b) => a.no - b.no);

  const handleDelete = (id) => {
    if (window.confirm(t.confirmDelete)) {
      deleteItem(id);
    }
  };

  return (
    <div className="flex-1 min-w-0">
      {/* Month title */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800">
          {currentYear}. {String(currentMonth).padStart(2, '0')}
        </h2>
        <button
          onClick={() => setShowAdd(true)}
          className="flex items-center gap-1.5 px-4 py-2 bg-blue-900 text-white rounded hover:bg-blue-800 text-sm font-medium"
        >
          <span>+</span> {t.actions.add}
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-blue-900 text-white">
              <th className="px-3 py-3 text-center w-12 font-semibold">{t.columns.no}</th>
              <th className="px-4 py-3 text-left font-semibold">{t.columns.summary}</th>
              <th className="px-3 py-3 text-center font-semibold w-36">{t.columns.impact}</th>
              <th className="px-3 py-3 text-center font-semibold w-36">{t.columns.applicability}</th>
              <th className="px-3 py-3 text-center font-semibold w-36">{t.columns.future}</th>
              <th className="px-3 py-3 text-center font-semibold w-28">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedItems.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-12 text-gray-400">
                  No news items. Click &quot;+ {t.actions.add}&quot; to add.
                </td>
              </tr>
            )}
            {sortedItems.map((item, idx) => (
              <tr
                key={item.id}
                className={`border-b border-gray-100 transition-colors ${
                  item.highlight
                    ? 'bg-yellow-100 hover:bg-yellow-200'
                    : idx % 2 === 0
                    ? 'bg-white hover:bg-gray-50'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                {/* NO */}
                <td className="px-3 py-3 text-center font-bold text-gray-700">{item.no}</td>

                {/* Summary */}
                <td className="px-4 py-3">
                  <div className="font-bold text-gray-900">{item.title}</div>
                  {item.subtitle && (
                    <div className="text-xs text-gray-500 mt-0.5">{item.subtitle}</div>
                  )}
                </td>

                {/* Impact */}
                <td className="px-3 py-3 text-center text-xs text-gray-700">{item.impact}</td>

                {/* Applicability */}
                <td className="px-3 py-3 text-center text-xs text-gray-700">{item.applicability}</td>

                {/* Future */}
                <td className="px-3 py-3 text-center text-xs text-gray-700">{item.future}</td>

                {/* Actions */}
                <td className="px-3 py-3">
                  <div className="flex items-center justify-center gap-1 flex-wrap">
                    <button
                      onClick={() => toggleHighlight(item.id)}
                      title={t.highlight}
                      className={`px-2 py-1 rounded text-xs ${
                        item.highlight
                          ? 'bg-yellow-400 text-yellow-900 hover:bg-yellow-500'
                          : 'bg-gray-100 text-gray-600 hover:bg-yellow-100'
                      }`}
                    >
                      ★
                    </button>
                    <button
                      onClick={() => setEditItem(item)}
                      className="px-2 py-1 rounded text-xs bg-blue-100 text-blue-700 hover:bg-blue-200"
                    >
                      {t.actions.edit}
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="px-2 py-1 rounded text-xs bg-red-100 text-red-600 hover:bg-red-200"
                    >
                      {t.actions.delete}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {editItem && (
        <NewsEditor item={editItem} onClose={() => setEditItem(null)} />
      )}

      {/* Add Modal */}
      {showAdd && (
        <NewsEditor item={null} onClose={() => setShowAdd(false)} />
      )}
    </div>
  );
}

export default NewsTable;
