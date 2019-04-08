import { StyleSheet } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
  default: {
    flex: 1,
    top: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.yummyPink,
    color: theme.colors.yellingRed,
  },
  sidebar: {
    flex: 1,
    top: 4,
    alignItems: 'center',
    backgroundColor: theme.colors.yellingRed,
    color: theme.colors.yellingRed,
  },
});

export default styles;
