import { StyleSheet, Dimensions } from 'react-native';
import { theme, font } from '../../styles/theme';

const styles = StyleSheet.create({
  navBar: {
    width: '100%',
    height: 'auto',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  main: {
    width: Math.round(Dimensions.get('window').width) - 40,
    height: '100%',
    flexDirection: 'column',
    alignContent: 'flex-start',
    backgroundColor: theme.colors.green,
    marginTop: 40,
    marginRight: theme.margins.lg,
  },
  navWrapper: {
    height: Math.round(Dimensions.get('window').height) - 180,
    marginTop: -30,
    marginRight: theme.margins.lg,
    marginLeft: theme.margins.lg,
    justifyContent: 'space-between',
  },
  listItemWrapper: {
    flexDirection: 'row',
    marginBottom: theme.margins.md,
  },
  listItemFont: font.lgBold,
  listItem: {
    marginRight: theme.margins.sm,
  },
  listItemSelected: {
    marginRight: theme.margins.sm,
    color: theme.colors.white,
  },
  logo: {
    alignItems: 'center',
  },
  logoFont: font.mdBold,
  logoFontColor: {
    color: theme.colors.white,
  },
  easterInner: {
    marginLeft: theme.margins.lg,
    backgroundColor: 'red',
  },
});

export default styles;
