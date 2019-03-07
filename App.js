<<<<<<< HEAD
=======
import './firebaseConfig';
>>>>>>> master
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Store from './Store';

import { createStackNavigator, createAppContainer } from 'react-navigation';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen';
import MeetupListScreen from './src/screens/MeetupList';
import MeetupEventScreen from './src/screens/MeetupEvent';
import MeetupCreateScreen from './src/screens/MeetupCreate';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Leaderboard: LeaderboardScreen,
    MeetupList: MeetupListScreen,
    MeetupEvent: MeetupEventScreen,
    MeetupCreate: MeetupCreateScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <StatusBar barStyle="dark-content" />
        <AppContainer />
      </Provider>
    );
  }
}
