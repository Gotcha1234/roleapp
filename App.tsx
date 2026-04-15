import AppNavigator from './src/navigation/AppNavigator';
import Banner from './src/components/Banner';
import { COLORS } from './src/constants/theme';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.BG_PRIMARY,
          padding: 16,
        }}
      >
        <Text>App Content</Text>
        <Text>Testing Banner Component:</Text>
      <Banner title="Banner Title" textContent="Hello World" backgroundColor={COLORS.BG_BANNER_3} textColor={COLORS.TEXT} textType="italic" textAlignment="center" borderColor={COLORS.GOLD_LIGHT} />
      </View>
    </>
  );
}
