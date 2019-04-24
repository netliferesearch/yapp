import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import propTypes from 'prop-types';

import theme from '../styles/theme';
import Header from '../components/Header';

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.yummyPink,
    color: '#F80303',
  },
  contestantWrapper: {
    margin: 20,
  },
  leaderName: {
    fontSize: 40,
    fontFamily: 'NetlifeY',
    color: theme.colors.yellingRed,
    marginTop: 20,
    marginBottom: 5,
  },
  leaderNote: {
    fontSize: 25,
    fontFamily: 'NetlifeY',
    color: theme.colors.yellingRed,
  },
});

export default class LeaderboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contestants: [
        // example
        {
          username: 'Tatsumi',
          numberOfYapps: 25,
        },
        {
          username: 'Jenny',
          numberOfYapps: 13,
        },
        {
          username: 'Lars',
          numberOfYapps: 15,
        },
        {
          username: 'Amir',
          numberOfYapps: 20,
        },
        {
          username: 'Tore',
          numberOfYapps: 17,
        },
        {
          username: 'Tommy',
          numberOfYapps: 12,
        },
      ],
    };
  }

  render() {
    const { contestants } = this.state;
    const { navigation } = this.props;
    const sortedList = contestants.sort((a, b) => b.numberOfYapps - a.numberOfYapps);

    return (
      <View style={styles.screenWrapper}>
        <Header />
        <View style={styles.contestantWrapper}>
          {sortedList.map(list => (
            <Text key={`list-${list.username}`} style={theme.h3}>
              {`${list.numberOfYapps} Yapps! -> ${list.username}`}
            </Text>
          ))}
        </View>
        <Text style={[styles.leaderName]}>{sortedList[0].username}</Text>
        <Text style={[styles.leaderNote]}>has taken the lead!</Text>
        <TouchableOpacity style={theme.button} onPress={() => navigation.navigate('Home')}>
          <Text style={theme.buttonText}>Go to homescreen</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

LeaderboardScreen.propTypes = {
  navigation: propTypes.object.isRequired,
};
