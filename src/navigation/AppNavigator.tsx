import React from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { CharacterNameScreen } from '../screens/CharacterNameScreen';
import { OnboardingIntroScreen } from '../screens/OnboardingIntroScreen';
import { QuizScreen } from '../screens/QuizScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS } from '../constants/constants';

export type RootStackParamList = {
  [SCREENS.characterName]: undefined;
  [SCREENS.home]: undefined;
  [SCREENS.onboardingIntro]: undefined;
  [SCREENS.onboarding]: undefined;
  [SCREENS.quiz]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.home}>
      <Stack.Screen
        name={SCREENS.home}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SCREENS.characterName}
        component={CharacterNameScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SCREENS.onboardingIntro}
        component={OnboardingIntroScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SCREENS.quiz}
        component={QuizScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SCREENS.onboarding}
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;