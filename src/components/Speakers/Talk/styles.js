import { StyleSheet } from 'react-native';
import { theme, font } from '../../../styles/theme';

const styles = StyleSheet.create({
  heroImageWrapper: {},
  heroImage: { width: 250, height: 250 },
  content: {
    flex: 1,
    flexDirection: 'column',
    marginTop: theme.margins.xl,
  },
  userNameFont: font.mdBold,
  userNameProperties: {
    marginTop: theme.margins.lg,
    marginBottom: theme.margins.sm,
  },
  userTitle: font.smRegular,
});

export default styles;
