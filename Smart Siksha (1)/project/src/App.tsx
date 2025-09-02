import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { UploadMaterials } from './components/UploadMaterials';
import { PracticeMode } from './components/PracticeMode';
import { StudyPlans } from './components/StudyPlans';
import { PastPapers } from './components/PastPapers';
import { Analytics } from './components/Analytics';
import { AppProvider } from './context/AppContext';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'upload':
        return <UploadMaterials />;
      case 'practice':
        return <PracticeMode />;
      case 'study-plans':
        return <StudyPlans />;
      case 'past-papers':
        return <PastPapers />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-50 flex">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 ml-64">
          <div className="p-8">
            {renderContent()}
          </div>
        </main>
      </div>
    </AppProvider>
  );
}

export default App;