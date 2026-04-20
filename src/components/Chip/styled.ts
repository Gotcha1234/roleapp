import { StyleSheet, DimensionValue } from 'react-native';
import { COLORS } from '../../constants/theme';

export const createStyles = ({ styles: { labelColor, width } }: { styles: { labelColor: string; width?: DimensionValue } }) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: COLORS.BG_CARD,
    borderRadius: 20,
    width: width ?? 'auto',
  },
  label: {
    color: labelColor,
  },
});
