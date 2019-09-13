import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

const styles = StyleSheet.create({
  sponsorsContainer: {
    marginBottom: theme.margins.xl,
  },
  superpartner: {
    width: '80%',
    height: 130,
  },
  mainpartner: {
    width: '60%',
    height: 80,
  },
  partner: {
    width: '50%',
    height: 80,
  },
});

export default styles;
