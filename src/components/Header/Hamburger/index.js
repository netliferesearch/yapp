import React from 'react';
import propTypes from 'prop-types';
import { View, TouchableHighlight } from 'react-native';
import styles from './styles';

export default class Hamburger extends React.Component {
  render() {
    const { navigation, open } = this.props;
    return (
      <React.Fragment>
        {open ? (
          <View style={styles.inMenuNav}>
            <TouchableHighlight underlayColor="transparent" onPress={() => navigation.closeDrawer()}>
              <View style={styles.hamburgerCloseWrapper}>
                <View style={styles.hamburgerClose1} />
                <View style={styles.hamburgerClose2} />
              </View>
            </TouchableHighlight>
          </View>
        ) : (
          <TouchableHighlight onPress={() => navigation.openDrawer()} underlayColor="transparent">
            <View style={styles.hamburger}>
              <View style={styles.hamburgerMiddle} />
            </View>
          </TouchableHighlight>
        )}
      </React.Fragment>
    );
  }
}

Hamburger.propTypes = {
  navigation: propTypes.shape().isRequired,
  open: propTypes.bool.isRequired,
};
