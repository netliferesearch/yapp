import { StyleSheet } from 'react-native';
import { theme, font } from '../../styles/theme';

const styles = StyleSheet.create({
  intro: {
    marginBottom: theme.margins.xl,
    alignItems: 'center',
  },
  introHead: font.xlBold,
  introArrow: font.mdBold,
});

export default styles;
