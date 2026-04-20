import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

export const createStyles = () => StyleSheet.create({
  button: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {},
  secondary: {
    backgroundColor: COLORS.GOLD_GLOW,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  ghost: {
    backgroundColor: 'transparent',
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  primaryText: {
    color: COLORS.BG_PRIMARY,
  },
  secondaryText: {
    color: COLORS.TEXT_DIM,
  },
  disabledButton: {
    opacity: 0.5,
  },
  disabledText: {
    color: COLORS.TEXT_DIM,
  },
  fullWidth: {
    width: '100%',
  },
  gradient: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.GOLD,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
});
