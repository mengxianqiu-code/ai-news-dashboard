// Main App component
import React from 'react';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import NewsTable from './components/NewsTable';
import ArchiveList from './components/ArchiveList';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-6 flex gap-6">
          <ArchiveList />
          <NewsTable />
        </main>
      </div>
    </AppProvider>
  );
}

export default App;
