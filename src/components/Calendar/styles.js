import { StyleSheet } from 'react-native';
import { theme, font } from '../../styles/theme';

const styles = StyleSheet.create({
  card: {
    marginBottom: theme.margins.md,
    backgroundColor: theme.colors.green,
  },
  cardInner: {
    padding: theme.margins.md,
    alignItems: 'center',
  },
  cardTitleFont: font.smBold,
  cardTitle: {
    marginBottom: theme.margins.xl,
  },
  cardText: font.xlBold,
  cardArrow: {
    marginTop: theme.margins.xl,
  },
  cardTextPosition: {
    textAlign: 'center',
  },
});

export default styles;
