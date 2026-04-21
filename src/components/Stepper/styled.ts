import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

export const createStyles = ({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) => StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
  stepText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.GOLD,
  },
  progress: {
    width: '100%',
    height: 8,
    backgroundColor: COLORS.BG_COMPONENTS,
    borderRadius: 2,
  },
  progressFill: {
    width: `${(currentStep / totalSteps) * 100}%`,
    height: 8,
    backgroundColor: '#c9a84c',
    borderRadius: 2,
  },
  label: {
    fontSize: 14,
    color: COLORS.TEXT_DIM,
  },
  stepContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 8,
  },
});