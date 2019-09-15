import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
  card: {
    marginBottom: theme.margins.md,
  },
  cardInner: {
    padding: theme.margins.md,
  },
  cardTitle: {
    marginBottom: theme.margins.xl,
  },
  cardArrow: {
    marginTop: theme.margins.sm,
  },
});

export default styles;
