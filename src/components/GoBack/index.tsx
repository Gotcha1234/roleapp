import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { createStyles } from "./styled";
import { Text } from "react-native";

interface Props {
  onPress: () => void;
}

export const GoBack = ({ onPress }: Props) => {
  const styles = createStyles();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.backButton}>
      <Ionicons name="arrow-back-outline" size={24} color={COLORS.GOLD} />
      <Text style={styles.backText}>Volver</Text>
    </TouchableOpacity>
  );
};