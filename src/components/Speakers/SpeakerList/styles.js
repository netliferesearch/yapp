import { StyleSheet, Dimensions } from 'react-native';
import { theme, font } from '../../../styles/theme';

const styles = StyleSheet.create({
  listWrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: theme.margins.sm,
    paddingBottom: theme.margins.sm,
    borderBottomWidth: 3,
    borderColor: theme.colors.black,
  },
  imageWrapper: {
    width: Dimensions.get('window').width < 480 ? 87 : 111,
    height: Dimensions.get('window').width < 480 ? 87 : 111,
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: Dimensions.get('window').width < 480 ? 72 : 96,
    height: Dimensions.get('window').width < 480 ? 72 : 96,
  },
  textWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  textTopWrapper: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  title: {
    flex: 10,
  },
  arrow: {
    flex: 2,
    alignItems: 'flex-end',
    textAlign: 'right',
  },
  titleFont: font.mdBold,
  textFont: font.smRegular,
});

export default styles;
