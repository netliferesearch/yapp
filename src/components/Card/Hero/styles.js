import { StyleSheet } from 'react-native';
import { theme } from '../../../styles/theme';

const styles = StyleSheet.create({
  card: {
    marginLeft: theme.margins.md,
    marginRight: theme.margins.md,
    backgroundColor: theme.colors.green,
    padding: 40,
    margin: theme.margins.xl,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  yFont: {
    fontFamily: 'NetlifeSansY-Bold',
    fontSize: 175,
  },
  arrowFont: {
    fontFamily: 'NetlifeSansY-Bold',
    fontSize: 175,
  },
});

export default styles;
