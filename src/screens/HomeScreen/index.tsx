
import { Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { createStyles } from './styled';
import Button from "../../components/Button";
import { COLORS, GRADIENT_BG } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { SCREENS } from '../../constants/constants';

const { characterName } = SCREENS;

type Nav = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;

export const HomeScreen = () => {
  const navigation = useNavigation<Nav>();
  const styles = createStyles();

  const handleStartAdventure = () => {
    navigation.navigate(characterName);
  };

  return (
    <LinearGradient
      colors={GRADIENT_BG.colors}
      locations={GRADIENT_BG.locations}
      style={styles.container}
    >
      <LinearGradient
        colors={[COLORS.GOLD, COLORS.GOLD_DARK]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.badge}
      >
        <Text style={styles.emoji}>⚔️</Text>
      </LinearGradient>
      <Text style={styles.title}>ROLEAPP</Text>
      <Text style={styles.subtitle}>CONVIERTE TUS HÁBITOS EN PODER</Text>
      {/* TODO: Add banner component when finished with default styles */}
      <View style={styles.buttonContainer}>
        <Button label="Comenzar mi aventura" onPress={handleStartAdventure} variant="primary" fullWidth />
      </View>
      <View style={styles.loginTextContainer}>
        <Text style={styles.loginText}>
          ¿Ya tienes una cuenta? <Text onPress={() => {
            // TODO: Navigate to login screen
          }} style={styles.loginLink}>Iniciar sesión</Text>
        </Text>
      </View>
    </LinearGradient>
  );
};
