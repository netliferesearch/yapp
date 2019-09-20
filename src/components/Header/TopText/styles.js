import { StyleSheet } from 'react-native';
import { font } from '../../../styles/theme';

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
  },
  text: font.smBold,
  backbuttonFont: font.lgBold,
  backbutton: {
    paddingTop: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
});

export default styles;
