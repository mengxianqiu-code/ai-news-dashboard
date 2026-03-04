// Modal form for adding/editing news items
import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

function NewsEditor({ item, onClose }) {
  const { t, saveItem, currentItems } = useApp();
  const isEdit = !!item?.id;

  const [form, setForm] = useState({
    no: item?.no ?? (currentItems.length + 1),
    title: item?.title ?? '',
    subtitle: item?.subtitle ?? '',
    impact: item?.impact ?? '',
    applicability: item?.applicability ?? '',
    future: item?.future ?? '',
    highlight: item?.highlight ?? false,
    id: item?.id ?? null
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveItem({ ...form, no: Number(form.no) });
    onClose();
  };

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdrop}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-lg">
        <div className="bg-blue-900 text-white px-5 py-3 rounded-t-lg flex justify-between items-center">
          <h3 className="font-bold text-base">
            {isEdit ? t.form.editTitle : t.form.addTitle}
          </h3>
          <button onClick={onClose} className="text-white hover:text-gray-200 text-xl leading-none">&times;</button>
        </div>
        <form onSubmit={handleSubmit} className="p-5 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">NO</label>
              <input
                type="number"
                name="no"
                value={form.no}
                onChange={handleChange}
                className="w-full border rounded px-2 py-1.5 text-sm"
                min={1}
                max={10}
                required
              />
            </div>
          </div>

          {[
            { name: 'title', label: t.form.title },
            { name: 'subtitle', label: t.form.subtitle },
            { name: 'impact', label: t.form.impact },
            { name: 'applicability', label: t.form.applicability },
            { name: 'future', label: t.form.future }
          ].map(field => (
            <div key={field.name}>
              <label className="block text-xs font-medium text-gray-600 mb-1">{field.label}</label>
              <input
                type="text"
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                className="w-full border rounded px-2 py-1.5 text-sm"
                required={field.name === 'title'}
              />
            </div>
          ))}

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="highlight"
              id="highlight"
              checked={form.highlight}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <label htmlFor="highlight" className="text-sm text-gray-600">{t.highlight}</label>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm rounded border border-gray-300 hover:bg-gray-50"
            >
              {t.actions.cancel}
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm rounded bg-blue-900 text-white hover:bg-blue-800"
            >
              {t.actions.save}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewsEditor;
