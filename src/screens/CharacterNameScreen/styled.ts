import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

export const createStyles = ({ styles: { insets } }: { styles: { insets: { bottom: number } } }) => StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: COLORS.BG_PRIMARY,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 20,
  },
  backText: {
    fontSize: 16,
    color: COLORS.GOLD,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.TEXT,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.TEXT_DIM,
  },
  separator: {
    height: 1,
    borderWidth: 1,
    borderColor: COLORS.BORDER_SUBTLE,
    marginTop: 16,
  },
  nameLabel: {
    fontSize: 16,
    color: COLORS.TEXT_DIM,
  },
  nameLabelContainer: {
    marginTop: 24,
  },
  continueButtonContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: insets.bottom || 20,
  },
});
