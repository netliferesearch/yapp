import { StyleSheet } from 'react-native';
import { theme, font } from '../../../styles/theme';

const styles = StyleSheet.create({
  programSlotContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: theme.margins.sm,
    paddingBottom: theme.margins.sm,
    borderBottomWidth: 3,
    borderColor: theme.colors.black,
  },
  leftColumn: {
    flex: 3,
  },
  rightColumn: {
    flex: 9,
    position: 'relative',
  },
  titleFont: font.smBold,
  titleFontProperties: {
    marginBottom: theme.margins.sm,
  },
});

export default styles;
