import React from 'react';
import { Flame, Calendar } from 'lucide-react';

export function StudyStreak() {
  const streakDays = Array.from({ length: 14 }, (_, i) => ({
    day: i + 1,
    completed: i < 12,
    today: i === 11
  }));

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
        <Flame className="w-5 h-5 text-orange-500" />
        <span>Study Streak</span>
      </h2>
      
      <div className="text-center mb-4">
        <div className="text-3xl font-bold text-orange-600">12</div>
        <div className="text-sm text-gray-500">Days in a row</div>
      </div>
      
      <div className="grid grid-cols-7 gap-2">
        {streakDays.map((day) => (
          <div
            key={day.day}
            className={`aspect-square rounded-lg flex items-center justify-center text-xs font-medium transition-all duration-200 ${
              day.today
                ? 'bg-orange-500 text-white ring-2 ring-orange-300'
                : day.completed
                ? 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                : 'bg-gray-100 text-gray-400'
            }`}
          >
            {day.day}
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">Keep going! You're on fire! 🔥</p>
      </div>
    </div>
  );
}