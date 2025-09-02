import React from 'react';
import { 
  BookOpen, 
  Target, 
  Clock, 
  TrendingUp, 
  Award, 
  Calendar,
  Brain,
  FileText
} from 'lucide-react';
import { StatsCard } from './ui/StatsCard';
import { RecentActivity } from './ui/RecentActivity';
import { StudyStreak } from './ui/StudyStreak';
import { QuickActions } from './ui/QuickActions';

export function Dashboard() {
  const stats = [
    {
      title: 'Study Hours',
      value: '47',
      change: '+12%',
      icon: Clock,
      color: 'blue'
    },
    {
      title: 'Topics Mastered',
      value: '23',
      change: '+5',
      icon: Target,
      color: 'green'
    },
    {
      title: 'Quiz Score',
      value: '89%',
      change: '+7%',
      icon: Award,
      color: 'purple'
    },
    {
      title: 'Study Streak',
      value: '12 days',
      change: 'Active',
      icon: TrendingUp,
      color: 'orange'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Student!</h1>
          <p className="text-gray-600 mt-1">Continue your learning journey with AI-powered assistance</p>
        </div>
        <div className="flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full">
          <Calendar className="w-4 h-4" />
          <span className="text-sm font-medium">Today: Math & Physics</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RecentActivity />
        </div>
        <div className="space-y-6">
          <StudyStreak />
          <QuickActions />
        </div>
      </div>
    </div>
  );
}