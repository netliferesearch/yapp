import { StyleSheet } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
  headerStyle: {
    marginTop: 50,
    backgroundColor: theme.colors.yummyPink,
  },
  screenWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.yummyPink,
    color: '#F80303',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  mainNumber: {
    color: theme.colors.yellingRed,
    fontSize: 65,
    fontFamily: 'NetlifeY',
    margin: 15,
  },
});

export default styles;
