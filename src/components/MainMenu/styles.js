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
    marginTop: -30,
    marginRight: theme.margins.lg,
    marginLeft: theme.margins.lg,
  },
  listItemWrapper: {
    flexDirection: 'row',
    marginBottom: theme.margins.md,
  },
  listItemFont: font.lgBold,
  listItem: {
    marginRight: theme.margins.sm,
  },
});

export default styles;
