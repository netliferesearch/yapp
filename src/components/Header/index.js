import React from 'react';
import { View } from 'react-native';
import propTypes from 'prop-types';
import TopText from './TopText';
import Hamburger from './Hamburger';
import styles from './styles';

const Header = props => {
  const { infoText } = props;
  return (
    <View style={styles.headerContainer}>
      <TopText {...props} text={['Y', 'Oslo']} />
      {infoText && <TopText {...props} text={['Youngstorget', '25.09 - 27.09.2019']} />}
      <Hamburger open={false} {...props} />
    </View>
  );
};

export default Header;

Header.defaultProps = {
  infoText: false,
};

Header.propTypes = {
  infoText: propTypes.bool,
};
