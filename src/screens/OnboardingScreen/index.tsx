import { StyleSheet, Text, View } from "react-native";

export const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Onboarding</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#960c0cffd2dff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});