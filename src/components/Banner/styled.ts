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
      paddingTop: 20,
      paddingRight: 24,
      paddingBottom: 20,
      paddingLeft: 24,
      marginTop: 0,
      marginRight: 28,
      marginBottom: 40,
      marginLeft: 28,
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
      fontStyle: styles.textType === 'italic' ? 'italic' : 'normal',
    },
    textColor: {
      color: styles.textColor || COLORS.TEXT,
    },
    bodyText: {
      lineHeight: 24,
    },
  });

export default createStyles;
