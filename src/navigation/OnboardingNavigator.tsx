import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding } from '../screens/Onboarding';

export type OnboardingStackParamList = {
  Onboarding: undefined;
};

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;