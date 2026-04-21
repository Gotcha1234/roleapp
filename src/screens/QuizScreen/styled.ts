import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

export const createStyles = ({ top, bottom }: { top: number, bottom: number }) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: COLORS.BG_PRIMARY,
    paddingHorizontal: 24,
    paddingTop: top + 16,
    paddingBottom: bottom + 12
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: COLORS.TEXT,
  },
  optionsContainer: {
    gap: 10,
  },
});