import { StyleSheet } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: theme.margins.md,
    backgroundColor: theme.colors.yummyPink,
  },
});

export default styles;