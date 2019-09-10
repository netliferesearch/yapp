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
  heroImage: {
    width: '80%',
    height: 180,
  },
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
