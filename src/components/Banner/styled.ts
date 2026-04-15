import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

const createStyles = ({
  styles,
}: {
  styles: {
    textAlignment?: 'left' | 'center' | 'right' | 'justify' | 'auto';
    textType?: 'normal' | 'italic';
    textColor?: string;
  };
}) =>
  StyleSheet.create({
    background1: {
      borderRadius: 16,
      paddingTop: 16,
      paddingRight: 18,
      paddingBottom: 16,
      paddingLeft: 18,
      overflow: 'hidden',
    },
    title: {
      color: COLORS.GOLD_LIGHT,
      fontSize: 14,
      fontWeight: '700',
      marginBottom: 4,
    },
    textAlignment: {
      textAlign: styles.textAlignment,
    },
    textType: {
      fontStyle: styles.textType === 'normal' ? 'normal' : 'italic',
    },
    textColor: {
      color: styles.textColor || COLORS.TEXT,
    },
  });

export default createStyles;