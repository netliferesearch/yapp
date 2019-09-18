import { StyleSheet } from 'react-native';
import { theme, font } from '../../styles/theme';

const styles = StyleSheet.create({
  heroWrapper: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: theme.margins.lg,
  },
  hero: {
    maxWidth: 250,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 70,
    paddingLeft: 10,
    backgroundColor: theme.colors.black,
    marginBottom: theme.margins.xl,
  },
  heroFont: font.xlBold,
  heroFontProperties: {
    color: theme.colors.white,
  },
  heroImageWrapper: {
    position: 'relative',
  },
  heroImage: {
    width: 236,
    height: 167,
    marginTop: -100,
    marginLeft: 50,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    marginTop: theme.margins.xl,
  },
});

export default styles;
