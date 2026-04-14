import { StyleSheet, Text, View } from "react-native";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
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