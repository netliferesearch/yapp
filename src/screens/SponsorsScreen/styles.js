import { StyleSheet } from 'react-native';
import { theme, font } from '../../styles/theme';

const styles = StyleSheet.create({
  sponsorFont: font.xlBold,
  sponsorFontProperties: {
    marginBottom: theme.margins.md,
  },
  partnersContainer: {
    marginBottom: theme.margins.xl,
  },
});

export default styles;
