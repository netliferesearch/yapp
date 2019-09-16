import { StyleSheet } from 'react-native';
import { theme, font } from '../../styles/theme';

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
    color: theme.colors.black,
  },
  innerWrapper: {
    marginRight: theme.margins.md,
    marginLeft: theme.margins.md,
  },
  intro: {
    marginBottom: theme.margins.xl,
    alignItems: 'center',
  },
  introHead: font.xlBold,
  introArrow: font.mdBold,
});

export default styles;
