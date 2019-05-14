import { StyleSheet } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
  primary: {
    alignItems: 'center',
    backgroundColor: theme.colors.yellingRed,
    paddingTop: theme.margins.sm,
    paddingRight: theme.margins.md,
    paddingBottom: theme.margins.sm,
    paddingLeft: theme.margins.md,
  },
  secondary: {
    alignItems: 'center',
    backgroundColor: theme.colors.yawingBlack,
    paddingTop: theme.margins.sm,
    paddingRight: theme.margins.md,
    paddingBottom: theme.margins.sm,
    paddingLeft: theme.margins.md,
  },
  buttonText: {
    color: theme.colors.yetiWhite,
    fontFamily: 'NetlifeY',
    fontSize: 16,
  },
});

export default styles;
