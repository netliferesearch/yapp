import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import propTypes from 'prop-types';
import firebase from '../../firebaseConfig';

import theme from '../styles/theme';
import Header from '../components/Header/Header';

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.yummyPink,
    color: '#F80303',
  },
  mainNumber: {
    color: theme.colors.yellingRed,
    fontSize: 65,
    fontFamily: 'NetlifeY',
    margin: 15,
  },
});

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      totalYapps: 0,
    };
  }

  componentWillMount() {
    firebase
      .database()
      .ref('/users/e000001')
      .on('value', snapshot => {
        const user = snapshot.val();
        this.setState({
          totalYapps: user.count,
          username: user.username,
        });
      });
  }

  render() {
    const { totalYapps, username } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.screenWrapper}>
        <Header />
        <Text style={theme.h3}>Keep Yappin'{username && `, ${username}.`}</Text>
        <Text style={theme.h3}>You have {totalYapps || '0'} Yapps!</Text>
        <TouchableOpacity style={theme.button} onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={theme.buttonText}>Go back to homescreen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: propTypes.object.isRequired,
};
