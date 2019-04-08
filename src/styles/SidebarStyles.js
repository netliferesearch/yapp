import { StyleSheet } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.yellingRed,
  },
});

const drawer = {
  activeTintColor: theme.colors.yellingRed,
  activeBackgroundColor: theme.colors.yellingRed,
  inactiveTintColor: theme.colors.yellingRed,
  inactiveBackgroundColor: 'transparent',
  labelStyle: { color: theme.colors.yetiWhite },
};

export { styles, drawer };
