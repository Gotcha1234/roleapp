import { COLORS } from "../../constants/theme";
import { StyleSheet } from "react-native";

export const createStyles = () => StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: COLORS.BG_PRIMARY,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
    backgroundColor: COLORS.BG_CARD,
    padding: 16,
    borderWidth: 1,
    borderColor: COLORS.BORDER_GOLD,
  },
  icon: {
    fontSize: 64,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.TEXT,
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle_text_dim: {
    fontSize: 16,
    color: COLORS.TEXT_DIM,
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 30,
  },
  subtitle_text_primary: {
    fontSize: 16,
    color: COLORS.TEXT,
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 30,
  },
  chipsContainer: {
    marginTop: 20,
  },
  chipsRow: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 260,
    marginTop: 20,
  },
  responseInfoContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  responseInfoText: {
    fontSize: 16,
    color: COLORS.TEXT_DIM,
    textAlign: 'center',
  },
})