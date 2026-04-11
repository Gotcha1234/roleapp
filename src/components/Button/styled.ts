import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: COLORS.GOLD,
  },
  secondary: {
    backgroundColor: COLORS.GOLD_GLOW,
  },
  ghost: {
    backgroundColor: 'transparent',
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
});

export default styles;