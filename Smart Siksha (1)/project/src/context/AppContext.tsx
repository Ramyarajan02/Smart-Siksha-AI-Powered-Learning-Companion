import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextType {
  user: {
    name: string;
    email: string;
    level: string;
  };
  studyData: {
    totalHours: number;
    streakDays: number;
    completedQuizzes: number;
    averageScore: number;
  };
  updateStudyData: (data: Partial<AppContextType['studyData']>) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [studyData, setStudyData] = useState({
    totalHours: 47,
    streakDays: 12,
    completedQuizzes: 25,
    averageScore: 89
  });

  const updateStudyData = (data: Partial<AppContextType['studyData']>) => {
    setStudyData(prev => ({ ...prev, ...data }));
  };

  const user = {
    name: 'Student',
    email: 'student@example.com',
    level: 'Intermediate'
  };

  const value = {
    user,
    studyData,
    updateStudyData
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}