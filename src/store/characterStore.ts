import AsyncStorage from '@react-native-async-storage/async-storage';

export const getCharacter = (): Promise<string | null> => {
  return AsyncStorage.getItem('character');
};

export const setCharacter = (value: string): Promise<void> => {
  return AsyncStorage.setItem('character', value);
};