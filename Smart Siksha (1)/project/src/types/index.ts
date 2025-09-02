export interface StudyMaterial {
  id: string;
  title: string;
  subject: string;
  uploadDate: Date;
  fileSize: number;
  fileType: string;
  summary?: string;
  keyTopics: string[];
  generatedMCQs: number;
  mindMapGenerated: boolean;
}

export interface Quiz {
  id: string;
  title: string;
  subject: string;
  questions: Question[];
  timeLimit?: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
  topic: string;
}

export interface StudyPlan {
  id: string;
  title: string;
  subject: string;
  duration: string;
  milestones: Milestone[];
  progress: number;
  startDate: Date;
  targetDate: Date;
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate: Date;
  resources: string[];
}

export interface PaperAnalysis {
  id: string;
  paperTitle: string;
  year: string;
  subject: string;
  topicWeightage: TopicWeightage[];
  questionPatterns: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  recommendedTopics: string[];
}

export interface TopicWeightage {
  topic: string;
  percentage: number;
  questionCount: number;
}