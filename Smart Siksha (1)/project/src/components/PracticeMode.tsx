import React, { useState } from 'react';
import { Brain, CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  subject: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

const sampleQuestions: Question[] = [
  {
    id: 1,
    question: "What is the derivative of sin(x)?",
    options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
    correct: 0,
    subject: "Mathematics",
    difficulty: "Medium"
  },
  {
    id: 2,
    question: "Which of the following is Newton's second law of motion?",
    options: ["F = ma", "E = mc²", "V = IR", "PV = nRT"],
    correct: 0,
    subject: "Physics",
    difficulty: "Easy"
  },
  {
    id: 3,
    question: "What is the molecular formula of glucose?",
    options: ["C₆H₁₂O₆", "C₂H₅OH", "H₂SO₄", "NaCl"],
    correct: 0,
    subject: "Chemistry",
    difficulty: "Medium"
  }
];

export function PracticeMode() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const question = sampleQuestions[currentQuestion];

  const handleAnswerSelect = (optionIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(optionIndex);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    if (selectedAnswer === question.correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  if (quizComplete) {
    const percentage = Math.round((score / sampleQuestions.length) * 100);
    
    return (
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Quiz Complete!</h2>
          <div className="text-4xl font-bold text-blue-600 mb-2">{percentage}%</div>
          <p className="text-gray-600 mb-6">You scored {score} out of {sampleQuestions.length} questions</p>
          
          <div className="space-y-4">
            <div className={`p-4 rounded-lg ${percentage >= 80 ? 'bg-green-50 text-green-800' : percentage >= 60 ? 'bg-yellow-50 text-yellow-800' : 'bg-red-50 text-red-800'}`}>
              <p className="font-medium">
                {percentage >= 80 ? 'Excellent work! Keep it up!' : 
                 percentage >= 60 ? 'Good effort! Review the topics you missed.' : 
                 'Keep practicing! Focus on the fundamentals.'}
              </p>
            </div>
            
            <button
              onClick={resetQuiz}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2 mx-auto"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Try Again</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Practice Mode</h1>
          <p className="text-gray-600 mt-1">Test your knowledge with AI-generated questions</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            Question {currentQuestion + 1} of {sampleQuestions.length}
          </div>
          <div className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
            Score: {score}/{currentQuestion + (showResult ? 1 : 0)}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Brain className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="font-medium text-gray-900">{question.subject}</div>
                <div className={`text-sm px-2 py-1 rounded-full inline-block ${
                  question.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                  question.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {question.difficulty}
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              Progress: {Math.round(((currentQuestion) / sampleQuestions.length) * 100)}%
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">{question.question}</h2>
            
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    showResult
                      ? index === question.correct
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : index === selectedAnswer
                        ? 'border-red-500 bg-red-50 text-red-800'
                        : 'border-gray-200 bg-gray-50 text-gray-600'
                      : selectedAnswer === index
                      ? 'border-blue-500 bg-blue-50 text-blue-800'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      showResult && index === question.correct
                        ? 'border-green-500 bg-green-500'
                        : showResult && index === selectedAnswer && index !== question.correct
                        ? 'border-red-500 bg-red-500'
                        : selectedAnswer === index
                        ? 'border-blue-500 bg-blue-500'
                        : 'border-gray-300'
                    }`}>
                      {showResult && index === question.correct && (
                        <CheckCircle className="w-4 h-4 text-white" />
                      )}
                      {showResult && index === selectedAnswer && index !== question.correct && (
                        <XCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              {showResult && (
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                  selectedAnswer === question.correct
                    ? 'bg-green-50 text-green-700'
                    : 'bg-red-50 text-red-700'
                }`}>
                  {selectedAnswer === question.correct ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <XCircle className="w-4 h-4" />
                  )}
                  <span className="font-medium">
                    {selectedAnswer === question.correct ? 'Correct!' : 'Incorrect'}
                  </span>
                </div>
              )}
            </div>
            
            <div className="space-x-3">
              {!showResult ? (
                <button
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  {currentQuestion < sampleQuestions.length - 1 ? 'Next Question' : 'Complete Quiz'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}