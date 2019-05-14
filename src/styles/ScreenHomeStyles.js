import { StyleSheet } from 'react-native';
import theme from './theme';

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
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
