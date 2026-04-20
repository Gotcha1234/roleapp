import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

export const createStyles = () => StyleSheet.create({
  title: {
    color: COLORS.GOLD,
    fontSize: 36,
    fontWeight: '800'
  },
  subtitle: {
    color: COLORS.TEXT_DIM,
    fontSize: 14,
    fontWeight: '400',
    marginTop: 8,
    marginBottom: 56,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    width: 96,
    height: 96,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    position: 'relative',
    zIndex: 1,
    shadowColor: COLORS.GOLD,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 12,
  },
  emoji: {
    fontSize: 48,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 28,
    marginTop: 40,
  },
  loginTextContainer: {
    marginTop: 16,
  },
  loginText: {
    color: COLORS.TEXT_DIM,
    fontSize: 14,
    textAlign: 'center',
  },
  loginLink: {
    color: COLORS.GOLD,
    fontWeight: '600',
  },
});
