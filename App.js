import './firebaseConfig';
//import * as firebase from 'firebase';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { Font, AppLoading } from 'expo';
import Store from './Store';
import theme from './src/styles/theme';
import { Constants } from 'expo'


import { DrawerItems, SafeAreaView, createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";

// Import screens
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import Sidebar from './src/components/Sidebar/sidebar';
const HomeScreenStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'HomeScreen',
      drawerLabel: 'Home',
    }),
  }
);

const LeaderboardScreenStack = createStackNavigator(
  {
    LeaderboardScreen: {
      screen: LeaderboardScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'LeaderboardScreen',
      drawerLabel: 'Leaderboard',
    }),
  }
);

const ProfileScreenStack = createStackNavigator(
  {
    ProfileScreen: {
      screen: ProfileScreen,
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'ProfileScreen',
      drawerLabel: 'Profile',
    }),
  }
);

const AppNavigator = createDrawerNavigator({
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
  contentComponent: Sidebar
  }
);


const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  state = {
    isReady: false,
    fontLoaded: false,
  };

  _loadFontsAsync = async () => {
    await Font.loadAsync({'NetlifeY': require('./assets/fonts/Netlife_Y-Bold.ttf')});
    this.setState({fontLoaded: true, isReady: true});
  }
  componentWillMount() {
    this._loadFontsAsync();
  }
	render() {
    if( this.state.fontLoaded ){
      return (
        <Provider store={Store}>
          <StatusBar barStyle="dark-content"/>
          <AppContainer />
			  </Provider>
      );
    }
    else{
      return (
        <AppLoading
          startAsync={this._loadAssetAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />);
    }

  }
}
