import React from 'react';
import { Clock, FileText, Brain, BookOpen } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'upload',
    title: 'Uploaded Mathematics Chapter 5',
    time: '2 hours ago',
    icon: FileText,
    color: 'blue'
  },
  {
    id: 2,
    type: 'quiz',
    title: 'Completed Physics Quiz - Score: 85%',
    time: '4 hours ago',
    icon: Brain,
    color: 'green'
  },
  {
    id: 3,
    type: 'study',
    title: 'Started Organic Chemistry Module',
    time: '1 day ago',
    icon: BookOpen,
    color: 'purple'
  },
  {
    id: 4,
    type: 'upload',
    title: 'Analyzed Past Year Paper 2022',
    time: '2 days ago',
    icon: FileText,
    color: 'orange'
  }
];

export function RecentActivity() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
        <Clock className="w-5 h-5" />
        <span>Recent Activity</span>
      </h2>
      
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className={`p-2 bg-${activity.color}-100 rounded-lg`}>
                <Icon className={`w-4 h-4 text-${activity.color}-600`} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">{activity.title}</p>
                <p className="text-sm text-gray-500">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}