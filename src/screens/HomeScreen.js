import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import propTypes from 'prop-types';
import firebase from '../../firebaseConfig';

import Header from '../components/Header';
import Footer from '../components/Footer';

import theme from '../styles/theme';
import styles from '../styles/HomeScreenStyles';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalYapps: 0,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;

    firebase
      .database()
      .ref('/dashboard')
      .on('value', snapshot => {
        const dashboard = snapshot.val();
        this.setState({ totalYapps: dashboard.countAll });
      });

    const user = firebase.auth().currentUser;

    if (user === null) {
      navigation.navigate('Signup');
    }
  }

  logout() {
    const { navigation } = this.props;
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate('Signup');
      });
  }

  render() {
    const { totalYapps } = this.state;
    const { navigation } = this.props;

    const user = firebase.auth().currentUser;

    return (
      <View style={styles.screenWrapper}>
        <Header />
        <View>
          <Text style={theme.h3}>Keep Yappin'!{user !== null && user.uid}</Text>
          <Text style={theme.h3}>We are currently at</Text>
          <Text style={styles.mainNumber}>{totalYapps}</Text>
          <Text style={theme.h3}>Yapps!</Text>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={theme.button} onPress={() => navigation.navigate('LeaderboardScreen')}>
            <Text style={theme.buttonText}>Go to leaderboard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={theme.button} onPress={() => navigation.navigate('ProfileScreen')}>
            <Text style={theme.buttonText}>See your profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={theme.button} onPress={() => this.logout(user)}>
            <Text style={theme.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: propTypes.object.isRequired,
};
