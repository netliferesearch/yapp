import { StyleSheet } from 'react-native';
import { theme, font } from '../../styles/theme';

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
    color: theme.colors.black,
  },
  screenInnerWrapper: {
    marginLeft: theme.margins.md,
    marginRight: theme.margins.md,
  },
  blockContainer: {
    marginBottom: theme.margins.xl,
  },
});

export default styles;
