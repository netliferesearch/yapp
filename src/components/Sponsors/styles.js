import { StyleSheet } from 'react-native';
import { theme, font } from '../../styles/theme';

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
    color: theme.colors.black,
  },
  screenInnerWrapper: {
    marginLeft: theme.margins.md,
    marginRight: theme.margins.md,
  },
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
