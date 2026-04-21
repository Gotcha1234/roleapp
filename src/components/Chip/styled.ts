import { StyleSheet, DimensionValue } from 'react-native';
import { COLORS } from '../../constants/theme';

type ChipStyles = {
  labelColor: string;
  width?: DimensionValue;
  backgroundColor?: string;
  borderColor?: string;
};

export const createStyles = ({ styles: { labelColor, width, backgroundColor, borderColor } }: { styles: ChipStyles }) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: backgroundColor ?? COLORS.BG_CARD,
    borderRadius: 20,
    width: width ?? 'auto',
    borderColor: borderColor ?? 'transparent',
    borderWidth: 1,
  },
  label: {
    color: labelColor,
  },
});
