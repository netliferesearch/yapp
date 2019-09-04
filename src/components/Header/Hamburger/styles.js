import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

const styles = StyleSheet.create({
  inMenuNav: {
    width: 80,
    height: 80,
    backgroundColor: theme.colors.green,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  hamburger: {
    width: 40,
    height: 34,
    marginTop: 2,
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderColor: theme.colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hamburgerMiddle: {
    width: 40,
    margin: 0,
    borderBottomWidth: 3,
    borderColor: theme.colors.black,
  },
  hamburgerCloseWrapper: {
    width: 40,
    height: 40,
    marginTop: 25,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  hamburgerClose1: {
    width: 40,
    borderBottomWidth: 3,
    marginTop: 3,
    borderColor: theme.colors.black,
    transform: [{ rotate: '-45deg' }],
  },
  hamburgerClose2: {
    width: 40,
    borderBottomWidth: 3,
    marginTop: -2,
    borderColor: theme.colors.black,
    transform: [{ rotate: '45deg' }],
  },
});

export default styles;
