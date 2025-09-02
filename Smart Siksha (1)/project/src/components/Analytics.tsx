import React from 'react';
import { BarChart3, TrendingUp, Calendar, Clock, Target, Award } from 'lucide-react';

export function Analytics() {
  const performanceData = [
    { subject: 'Mathematics', score: 85, trend: '+5%', color: 'blue' },
    { subject: 'Physics', score: 78, trend: '+12%', color: 'green' },
    { subject: 'Chemistry', score: 92, trend: '+3%', color: 'purple' },
    { subject: 'Biology', score: 88, trend: '+8%', color: 'orange' }
  ];

  const weeklyStudy = [
    { day: 'Mon', hours: 4 },
    { day: 'Tue', hours: 3 },
    { day: 'Wed', hours: 5 },
    { day: 'Thu', hours: 2 },
    { day: 'Fri', hours: 6 },
    { day: 'Sat', hours: 4 },
    { day: 'Sun', hours: 3 }
  ];

  const maxHours = Math.max(...weeklyStudy.map(d => d.hours));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Learning Analytics</h1>
        <p className="text-gray-600 mt-1">Track your progress and optimize your study strategy</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <BarChart3 className="w-5 h-5" />
              <span>Subject Performance</span>
            </h2>
            
            <div className="space-y-4">
              {performanceData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{item.subject}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">{item.score}%</span>
                      <span className={`text-sm font-medium ${item.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {item.trend}
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`bg-${item.color}-600 h-3 rounded-full transition-all duration-500`}
                      style={{ width: `${item.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>Weekly Study Hours</span>
            </h2>
            
            <div className="flex items-end justify-between space-x-2 h-48">
              {weeklyStudy.map((day, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 flex-1">
                  <div 
                    className="bg-blue-600 rounded-t-lg w-full transition-all duration-500 hover:bg-blue-700"
                    style={{ height: `${(day.hours / maxHours) * 100}%`, minHeight: '8px' }}
                  ></div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-900">{day.hours}h</div>
                    <div className="text-xs text-gray-500">{day.day}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
              <Target className="w-5 h-5" />
              <span>Study Goals</span>
            </h2>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-blue-900">Daily Target</span>
                  <span className="text-sm text-blue-700">4/5 hours</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-green-900">Weekly Goal</span>
                  <span className="text-sm text-green-700">27/30 hours</span>
                </div>
                <div className="w-full bg-green-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span>Achievements</span>
            </h2>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-medium text-yellow-900">Quiz Master</div>
                  <div className="text-sm text-yellow-700">100 quizzes completed</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-medium text-green-900">Consistent Learner</div>
                  <div className="text-sm text-green-700">12-day study streak</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>This Month</span>
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">127</div>
                <div className="text-xs text-gray-500">Hours Studied</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">89%</div>
                <div className="text-xs text-gray-500">Avg Score</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}