import { StyleSheet } from 'react-native';
import { theme, font } from '../../styles/theme';

const styles = StyleSheet.create({
  programContainer: {
    marginBottom: theme.margins.md,
    zIndex: 0,
  },
  programTabs: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: -3,
    zIndex: 1,
  },
  programTab: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.margins.sm,
    marginRight: theme.margins.md,
  },
  programTabDefault: {
    backgroundColor: theme.colors.black,
    borderBottomWidth: 4,
  },
  programTabSelected: {
    borderWidth: 3,
    borderTopColor: theme.colors.black,
    borderRightColor: theme.colors.black,
    borderBottomColor: theme.colors.black,
    borderLeftColor: theme.colors.black,
    position: 'relative',
  },
  programTabSelectedTabBottom: {
    height: 6,
    backgroundColor: theme.colors.white,
    position: 'absolute',
    right: 0,
    bottom: -4,
    left: 0,
  },
  tabFont: font.smBold,
  tabFontProperties: {
    color: theme.colors.white,
  },
  tabFontPropertiesSelected: {
    color: theme.colors.black,
  },
});

export default styles;
