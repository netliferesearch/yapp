import React from 'react';

import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import Sidebar from './src/components/Sidebar/sidebar';

const HomeScreenStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  {
    navigationOptions: () => ({
      initialRouteName: 'HomeScreen',
      drawerLabel: 'Home',
    }),
  },
);

const LeaderboardScreenStack = createStackNavigator(
  {
    LeaderboardScreen: {
      screen: LeaderboardScreen,
    },
  },
  {
    navigationOptions: () => ({
      initialRouteName: 'LeaderboardScreen',
      drawerLabel: 'Leaderboard',
    }),
  },
);

const ProfileScreenStack = createStackNavigator(
  {
    ProfileScreen: {
      screen: ProfileScreen,
    },
  },
  {
    navigationOptions: () => ({
      initialRouteName: 'ProfileScreen',
      drawerLabel: 'Profile',
    }),
  },
);

const AppNavigator = createDrawerNavigator(
  {
    HomeScreen: {
      name: 'HomeScreenStack',
      screen: HomeScreenStack,
    },
    LeaderboardScreen: {
      name: 'LeaderboardScreenStack',
      screen: LeaderboardScreenStack,
    },
    ProfileScreen: {
      name: 'ProfileScreenStack',
      screen: ProfileScreenStack,
    },
  },
  {
    contentComponent: Sidebar,
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class LoggedInRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <AppContainer />;
  }
}
