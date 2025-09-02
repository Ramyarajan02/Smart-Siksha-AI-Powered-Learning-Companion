import React, { useState } from 'react';
import { FileText, TrendingUp, BarChart3, Upload, Eye, Download } from 'lucide-react';

interface PaperAnalysis {
  id: number;
  title: string;
  year: string;
  subject: string;
  topTopics: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  weightage: { topic: string; percentage: number }[];
  patterns: string[];
}

const sampleAnalyses: PaperAnalysis[] = [
  {
    id: 1,
    title: "JEE Main Mathematics",
    year: "2023",
    subject: "Mathematics",
    topTopics: ["Calculus", "Algebra", "Coordinate Geometry"],
    difficulty: "Hard",
    weightage: [
      { topic: "Calculus", percentage: 35 },
      { topic: "Algebra", percentage: 30 },
      { topic: "Coordinate Geometry", percentage: 20 },
      { topic: "Trigonometry", percentage: 15 }
    ],
    patterns: [
      "Integration problems appear in 3-4 questions",
      "Complex numbers always have 1 question",
      "Coordinate geometry focuses on circles and parabolas"
    ]
  },
  {
    id: 2,
    title: "CBSE Physics Board",
    year: "2023",
    subject: "Physics",
    topTopics: ["Electromagnetism", "Optics", "Modern Physics"],
    difficulty: "Medium",
    weightage: [
      { topic: "Electromagnetism", percentage: 25 },
      { topic: "Optics", percentage: 20 },
      { topic: "Modern Physics", percentage: 20 },
      { topic: "Mechanics", percentage: 35 }
    ],
    patterns: [
      "Numerical problems dominate the paper",
      "Ray optics has consistent 5-mark questions",
      "Modern physics focuses on photoelectric effect"
    ]
  }
];

export function PastPapers() {
  const [selectedAnalysis, setSelectedAnalysis] = useState<PaperAnalysis | null>(null);
  const [uploadMode, setUploadMode] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Past Paper Analysis</h1>
          <p className="text-gray-600 mt-1">AI-powered analysis of previous year question papers</p>
        </div>
        <button 
          onClick={() => setUploadMode(!uploadMode)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Upload className="w-4 h-4" />
          <span>Upload Paper</span>
        </button>
      </div>

      {uploadMode && (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Upload Question Paper</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-2">Drag and drop your question paper here</p>
            <p className="text-sm text-gray-500">Supports PDF, DOC, and image formats</p>
            <input
              type="file"
              accept=".pdf,.doc,.docx,.jpg,.png"
              className="hidden"
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-900">Paper Analyses</h2>
          
          <div className="space-y-4">
            {sampleAnalyses.map((analysis) => (
              <div
                key={analysis.id}
                onClick={() => setSelectedAnalysis(analysis)}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{analysis.title}</h3>
                      <p className="text-sm text-gray-500">{analysis.subject} • {analysis.year}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    analysis.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                    analysis.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {analysis.difficulty}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-gray-600">Top Topics:</div>
                  <div className="flex flex-wrap gap-2">
                    {analysis.topTopics.map((topic, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-md text-xs">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex justify-between text-sm">
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>View Analysis</span>
                  </button>
                  <button className="text-green-600 hover:text-green-700 font-medium flex items-center space-x-1">
                    <Download className="w-4 h-4" />
                    <span>Generate Sample</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {selectedAnalysis ? (
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">{selectedAnalysis.title} Analysis</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                    <BarChart3 className="w-4 h-4" />
                    <span>Topic Weightage</span>
                  </h3>
                  <div className="space-y-3">
                    {selectedAnalysis.weightage.map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-gray-700">{item.topic}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${item.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900 w-8">{item.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>Question Patterns</span>
                  </h3>
                  <div className="space-y-2">
                    {selectedAnalysis.patterns.map((pattern, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">{pattern}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">AI Recommendations</h4>
                  <p className="text-sm text-gray-700">Focus on Calculus and Algebra for maximum score improvement. Practice integration techniques daily.</p>
                </div>

                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  Generate Practice Paper
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Select a paper analysis to view detailed insights</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}