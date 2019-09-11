import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
    color: theme.colors.black,
  },
  innerWrapper: {
    marginRight: theme.margins.md,
    marginLeft: theme.margins.md,
  },
});

export default styles;
