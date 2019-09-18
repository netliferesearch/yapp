import { StyleSheet } from 'react-native';
import { theme, font } from '../../styles/theme';

const styles = StyleSheet.create({
  blockContainer: {
    marginBottom: theme.margins.xl,
  },
  titleFont: font.mdBold,
  titleFontProperties: {
    marginBottom: theme.margins.md,
  },
});

export default styles;
