import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, Target, Plus, CheckCircle, Circle } from 'lucide-react';

interface StudyPlan {
  id: number;
  title: string;
  subject: string;
  duration: string;
  progress: number;
  totalTopics: number;
  completedTopics: number;
  nextMilestone: string;
  color: string;
}

const samplePlans: StudyPlan[] = [
  {
    id: 1,
    title: "JEE Mathematics Preparation",
    subject: "Mathematics",
    duration: "3 months",
    progress: 65,
    totalTopics: 15,
    completedTopics: 10,
    nextMilestone: "Complete Calculus Module",
    color: "blue"
  },
  {
    id: 2,
    title: "Physics Mechanics",
    subject: "Physics", 
    duration: "6 weeks",
    progress: 40,
    totalTopics: 8,
    completedTopics: 3,
    nextMilestone: "Motion in 2D Practice",
    color: "green"
  },
  {
    id: 3,
    title: "Organic Chemistry Basics",
    subject: "Chemistry",
    duration: "8 weeks",
    progress: 85,
    totalTopics: 12,
    completedTopics: 10,
    nextMilestone: "Reaction Mechanisms Test",
    color: "purple"
  }
];

export function StudyPlans() {
  const [selectedPlan, setSelectedPlan] = useState<StudyPlan | null>(null);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Study Plans</h1>
          <p className="text-gray-600 mt-1">AI-generated personalized learning roadmaps</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Create New Plan</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">Active Plans</h2>
          
          <div className="space-y-4">
            {samplePlans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan)}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 bg-${plan.color}-100 rounded-lg`}>
                      <BookOpen className={`w-5 h-5 text-${plan.color}-600`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{plan.title}</h3>
                      <p className="text-sm text-gray-500">{plan.subject}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Progress</div>
                    <div className={`text-lg font-bold text-${plan.color}-600`}>{plan.progress}%</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Progress</span>
                    <span>{plan.completedTopics}/{plan.totalTopics} topics</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-${plan.color}-600 h-2 rounded-full transition-all duration-300`}
                      style={{ width: `${plan.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{plan.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Target className="w-4 h-4" />
                    <span>{plan.nextMilestone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {selectedPlan ? (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">{selectedPlan.title}</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold text-gray-900">{selectedPlan.duration}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500">Subject</div>
                    <div className="font-semibold text-gray-900">{selectedPlan.subject}</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Study Milestones</h3>
                  <div className="space-y-3">
                    {Array.from({ length: selectedPlan.totalTopics }, (_, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        {i < selectedPlan.completedTopics ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <Circle className="w-5 h-5 text-gray-300" />
                        )}
                        <span className={`${i < selectedPlan.completedTopics ? 'text-gray-900 line-through' : 'text-gray-700'}`}>
                          Topic {i + 1}: Sample Study Topic
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Next Milestone</h4>
                  <p className="text-blue-700">{selectedPlan.nextMilestone}</p>
                  <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Select a study plan to view details</p>
            </div>
          )}

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Today's Schedule</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-medium text-blue-900">Math - Calculus</div>
                  <div className="text-sm text-blue-700">9:00 AM - 10:30 AM</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <Calendar className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-medium text-green-900">Physics - Mechanics</div>
                  <div className="text-sm text-green-700">2:00 PM - 3:30 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}