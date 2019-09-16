import { StyleSheet } from 'react-native';
import { theme, font } from '../../styles/theme';

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: theme.margins.lg,
    paddingRight: theme.margins.md,
    paddingBottom: theme.margins.lg,
    paddingLeft: theme.margins.md,
  },
});

export default styles;
