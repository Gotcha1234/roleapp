import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

export const createStyles = ({ top, bottom, chipBgColor }: { top: number, bottom: number, chipBgColor: string }) => StyleSheet.create({
  chipContainer: {
    marginVertical: 16,
  },
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
    marginBottom: 24
  },
  buttonsContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: 16
  },
  chipIcon: {
    width: 8,
    height: 8,
    borderRadius: 9999,
    backgroundColor: chipBgColor,
  },
});