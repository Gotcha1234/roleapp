import AsyncStorage from '@react-native-async-storage/async-storage';

const QUIZ_ANSWERS_KEY = 'quiz_answers';
const QUIZ_PROGRESS_KEY = 'quiz_progress';

type QuizAnswers = Record<string, string>; // questionId -> optionKey

export const saveQuizAnswers = async (answers: QuizAnswers): Promise<void> => {
  await AsyncStorage.setItem(QUIZ_ANSWERS_KEY, JSON.stringify(answers));
};

export const loadQuizAnswers = async (): Promise<QuizAnswers | null> => {
  const raw = await AsyncStorage.getItem(QUIZ_ANSWERS_KEY);
  return raw ? JSON.parse(raw) : null;
};

export const clearQuizAnswers = async (): Promise<void> => {
  await AsyncStorage.removeItem(QUIZ_ANSWERS_KEY);
};

export const saveQuizProgress = async (index: number): Promise<void> => {
  await AsyncStorage.setItem(QUIZ_PROGRESS_KEY, String(index));
};

export const loadQuizProgress = async (): Promise<number | null> => {
  const raw = await AsyncStorage.getItem(QUIZ_PROGRESS_KEY);
  return raw !== null ? Number(raw) : null;
};