import { StyleSheet } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
  screenWrapper: {
    padding: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: theme.colors.yummyPink,
  },
  // TODO: remove input styles and create separate input component.
  input: {
    width: 200,
    height: 40,
    padding: 5,
    borderBottomColor: theme.colors.yellingRed,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    backgroundColor: theme.colors.yetiWhite,
  },
  logoWrapper: {
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
  },
  buttonText: {
    color: theme.colors.yetiWhite,
  },
});

export default styles;
