import { StyleSheet } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
  screenWrapper: {
    padding: theme.margins.md,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.yummyPink,
  },
  spinnerWrapper: {
    marginTop: theme.margins.lg,
  },
});

export default styles;
