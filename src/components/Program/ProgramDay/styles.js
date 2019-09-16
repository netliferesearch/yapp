import { StyleSheet } from 'react-native';
import { theme, font } from '../../../styles/theme';

const styles = StyleSheet.create({
  container: {
    padding: theme.margins.md,
    backgroundColor: theme.colors.white,
    borderWidth: 3,
    borderColor: theme.colors.black,
  },
  headingFont: font.mdBold,
  heading: {
    marginBottom: theme.margins.sm,
    marginTop: theme.margins.sm,
  },
  headingExtraMargin: {
    marginTop: theme.margins.xl * 2,
  },
});

export default styles;
