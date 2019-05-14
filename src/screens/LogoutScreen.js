import React from 'react';
import { View, Text } from 'react-native';
import propTypes from 'prop-types';

import firebase from '../../firebaseConfig';
import errorMsg from '../utils/errorMsg';

export default class LogoutScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { navigation } = this.props;
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate('Signup');
      })
      .catch(error => {
        errorMsg('Log out error', error);
      });
  }

  render() {
    return (
      <View>
        <Text>Log out</Text>
      </View>
    );
  }
}

LogoutScreen.propTypes = {
  navigation: propTypes.object.isRequired,
};
