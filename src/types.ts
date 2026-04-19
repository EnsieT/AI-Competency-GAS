export interface TopicScore {
  correct: number;
  total: number;
}

export interface UserProgress {
  competencyScore: number | null;
  topicScores?: Record<string, TopicScore>;
  claudeScore: number | null;
  copilotScore?: number | null;
  databricksScore?: number | null;
  readConcepts: string[];
  completedCourses: string[];
  completedProjects: string[];
}

