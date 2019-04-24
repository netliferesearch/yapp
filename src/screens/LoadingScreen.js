import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import propTypes from 'prop-types';

import firebase from '../../firebaseConfig';

import Logo from '../images/logo';
import styles from '../styles/LoadingScreenStyles';
import theme from '../styles/theme';

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate('LoggedIn');
      } else {
        this.props.navigation.navigate('Signup');
      }
    });
    return (
      <View style={styles.screenWrapper}>
        <Logo />
        <View style={styles.spinnerWrapper}>
          <ActivityIndicator size="large" color={theme.colors.yellingRed} />
        </View>
      </View>
    );
  }
}

Loading.propTypes = {
  navigation: propTypes.object.isRequired,
};
