import { StyleSheet } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: theme.margins.md,
  },
  label: {
    fontFamily: 'NetlifeY',
    fontSize: 16,
  },
  error: {
    fontFamily: 'NetlifeY',
    fontSize: 16,
    color: theme.colors.yellingRed,
  },
  input: {
    width: '100%',
    height: 40,
    padding: 5,
    borderBottomColor: theme.colors.yellingRed,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    backgroundColor: theme.colors.yetiWhite,
  },
});

export default styles;
