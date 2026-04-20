import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

export const createStyles = () => StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  backText: {
    color: COLORS.GOLD,
    fontSize: 16,
    marginLeft: 8,
  },
})