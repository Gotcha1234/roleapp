import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/theme';

const styles = StyleSheet.create({
  aboveText: {
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
    fontSize: 12,
    margin: 0,
    fontFamily: 'SegoeUI',
    color: COLORS.TEXT_DIM,
  },
  inputBox: {
    color: COLORS.TEXT,
    borderColor: COLORS.GOLD,
    boxShadow: `0 0 0 3px ${COLORS.GOLD_GLOW}`,
    width: '100%',
    backgroundColor: COLORS.BG_CARD,
    borderWidth: 1,
    borderRadius: 12,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 16,
    fontFamily: 'SegoeUI',
    boxSizing: 'border-box',
  },
});

export default styles;
