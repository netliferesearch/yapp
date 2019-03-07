import './firebaseConfig';
import React from 'react';
import {
	SafeAreaView,
  StatusBar
} from 'react-native';
import { Provider } from 'react-redux';
import Store from './Store';

import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator, createSwitchNavigator } from "react-navigation";

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen';

// Start has redux. Remove this file.
// import Start from './src/components/Start';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Leaderboard: LeaderboardScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerLeft: null,
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        height: 120,
        backgroundColor: '#F3C1C1' 
      }
    },
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
	render() {
		return (
			<Provider store={Store}>
        <StatusBar barStyle="dark-content"/>
        <AppContainer />
			</Provider>
		);
	}
}
