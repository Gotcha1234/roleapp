import { COLORS } from "../../constants/theme";
import { StyleSheet } from "react-native";

export const createStyles = () => StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: COLORS.BG_PRIMARY,
  },
})