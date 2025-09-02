import React from 'react';
import { Upload, Brain, BookOpen, FileText } from 'lucide-react';

const actions = [
  {
    title: 'Upload Material',
    description: 'Add new study content',
    icon: Upload,
    color: 'blue',
    action: 'upload'
  },
  {
    title: 'Quick Quiz',
    description: 'Test your knowledge',
    icon: Brain,
    color: 'green',
    action: 'practice'
  },
  {
    title: 'Study Plan',
    description: 'Review your roadmap',
    icon: BookOpen,
    color: 'purple',
    action: 'study-plans'
  },
  {
    title: 'Past Papers',
    description: 'Analyze patterns',
    icon: FileText,
    color: 'orange',
    action: 'past-papers'
  }
];

export function QuickActions() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
      
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              className={`p-4 rounded-lg border-2 border-gray-200 hover:border-${action.color}-300 hover:bg-${action.color}-50 transition-all duration-200 text-left group`}
            >
              <Icon className={`w-5 h-5 text-${action.color}-600 mb-2`} />
              <div className="font-medium text-gray-900 text-sm">{action.title}</div>
              <div className="text-xs text-gray-500">{action.description}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}