/**
 * Init application and routing for logged out and logged in users.
 */
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { Font } from 'expo';

import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import Store from './Store';

import LoadingScreen from './src/screens/LoadingScreen';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import NetlifeYFont from './assets/fonts/Netlife_Y-Bold.ttf';

const LoggedOut = createStackNavigator({
  Loading: LoadingScreen,
  Signup: SignupScreen,
});

const LoggedIn = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      initialRouteName: 'HomeScreen',
      drawerLabel: 'Home',
    }),
  },
  LeaderboardScreen: {
    screen: LeaderboardScreen,
    navigationOptions: () => ({
      initialRouteName: 'LeaderboardScreen',
      drawerLabel: 'Leaderboard',
    }),
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      initialRouteName: 'ProfileScreen',
      drawerLabel: 'Profile',
    }),
  },
});

const AppNavigator = createSwitchNavigator(
  {
    LoggedOut,
    LoggedIn,
  },
  {
    initialRouteName: 'LoggedOut',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.loadFontsAsync();
  }

  async loadFontsAsync() {
    await Font.loadAsync({ NetlifeY: NetlifeYFont });
  }

  render() {
    return (
      <Provider store={Store}>
        <StatusBar barStyle="dark-content" />
        <AppContainer />
      </Provider>
    );
  }
}
