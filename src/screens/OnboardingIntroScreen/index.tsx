import { View, Text } from "react-native";
import { createStyles } from "./styled";
import { GoBack } from "../../components/GoBack";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../../constants/constants";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { Chip } from "../../components/Chip";
import Button from "../../components/Button";

type NavigationProp = NativeStackNavigationProp<RootStackParamList, typeof SCREENS.onboardingIntro, typeof SCREENS.characterName>;

export const OnboardingIntroScreen = () => {
  const styles = createStyles();
  const navigation = useNavigation<NavigationProp>();

  const handleGoBack = () => {
    navigation.navigate(SCREENS.characterName);
  };

  const handleStartQuiz = () => {
    navigation.navigate(SCREENS.quiz);
  };

  return (
    <View style={styles.container}>
      <GoBack onPress={handleGoBack} />
      <View style={styles.centered}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>
            📊
          </Text>
        </View>
        <Text style={styles.title}>Midamos tu nivel actual</Text>
        <Text style={styles.subtitle_text_dim}>Basado en tus hábitos recientes, tu personaje iniciará con estadísticas únicas.</Text>
        <Text style={styles.subtitle_text_primary}>No es juicio: es tu punto de partida.</Text>
        <View style={styles.chipsContainer}>
          <View style={styles.chipsRow}>
            <Chip icon="🗡️" label="Fuerza" />
            <Chip icon="🧠" label="Inteligencia" />
          </View>
          <View style={styles.chipsRow}>
            <Chip icon="🏃" label="Aguante" />
            <Chip icon="📖" label="Sabiduría" />
          </View>
          <View style={styles.chipsRow}>
            <Chip icon="🙏" label="Fe" />
            <Chip icon="✨" label="Magia" />
          </View>
        </View>
        {/* TODO: Add banner component when finished with message: "18 preguntas · ~3 minutos · Tus respuestas determinan tus stats de inicio" */}
        {/* TODO: Add banner component with styles { backgroundColor: rgba(255, 255, 255, 0.03), paddingHorizontal: 16, paddingVertical: 14, borderRadius: 14, marginTop: 20 } */}
        <View style={styles.buttonContainer}>
          <Button
            fullWidth
            variant="primary"
            label="Empezar cuestionario"
            onPress={handleStartQuiz}
          />
        </View>
        <View style={styles.responseInfoContainer}>
          <Text style={styles.responseInfoText}>Responde sobre las últimas 2 semanas</Text>
        </View>
      </View>
    </View>
  );
};