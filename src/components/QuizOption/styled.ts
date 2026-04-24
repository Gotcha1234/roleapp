import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

export const createStyles = ({ isSelected }: { isSelected: boolean }) => StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: isSelected ? COLORS.QUIZ_OPTION_BG_DARK : COLORS.BG_CARD,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: isSelected ? COLORS.GOLD : COLORS.QUIZ_OPTION_BORDER,
  },
  optionContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: isSelected ? COLORS.GOLD : COLORS.QUIZ_OPTION_BG_LIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    color: isSelected ? COLORS.BLACK_DARK : COLORS.TEXT_DIM,
    fontSize: 16,
    fontWeight: 'bold',
  },
  optionLabel: {
    color: COLORS.TEXT,
    fontSize: 16,
  },
});
