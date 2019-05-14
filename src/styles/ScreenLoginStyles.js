import { StyleSheet } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
  screenWrapper: {
    padding: theme.margins.xl,
    backgroundColor: theme.colors.yetiWhite,
  },
  formWrapper: {
    marginBottom: theme.margins.md,
  },
  errorWrapper: {
    padding: theme.margins.md,
    marginTop: theme.margins.md,
    marginBottom: theme.margins.md,
    backgroundColor: theme.colors.yummyPink,
  },
  error: {
    color: theme.colors.yellingRed,
    fontFamily: 'NetlifeY',
    fontSize: 16,
  },
  buttonWrapper: {
    marginRight: theme.margins.xl,
    marginLeft: theme.margins.xl,
  },
  textOr: {
    fontFamily: 'NetlifeY',
    fontSize: 16,
    textAlign: 'center',
    margin: theme.margins.md,
  },
});

export default styles;
