export type Dimension = 'frequency' | 'intensity' | 'system';

export type Answers = Record<Dimension, 0 | 1 | 2 | 3>;

export interface QuizOption {
  key: 'none' | 'low' | 'medium' | 'high'
  label: string
  score: 0 | 1 | 2 | 3
}

export interface QuizQuestion {
  id: string
  stat: string
  dimension: 'frequency' | 'intensity' | 'system'
  question: string
  options: [QuizOption, QuizOption, QuizOption, QuizOption]
}
