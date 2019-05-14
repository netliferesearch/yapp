/**
 * Init application and routing for logged out and logged in users.
 */
import React from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import { Font } from 'expo';

import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';

import Store from './Store';

import LoadingScreen from './src/screens/LoadingScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import YScreen from './src/screens/YScreen';
import LogoutScreen from './src/screens/LogoutScreen';

import NetlifeYFont from './assets/fonts/Netlife_Y-Bold.ttf';
import styles from './src/styles/NavigatorStyles';

const LoggedOut = createStackNavigator({
  Loading: {
    screen: LoadingScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: () => ({
      header: null,
      initialRouteName: 'Login',
      drawerLabel: 'Log in',
    }),
  },
  Signup: {
    screen: SignupScreen,
    navigationOptions: () => ({
      header: null,
      initialRouteName: 'Signup',
      drawerLabel: 'Signup',
    }),
  },
});

const LoggedInTabs = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      drawerLabel: 'Home',
    },
    YScreen: {
      screen: YScreen,
      drawerLabel: 'Y Conference',
    },
    LogoutScreen: {
      screen: LogoutScreen,
      drawerLabel: 'Log out',
    },
  },
  { initialRouteName: 'Home' },
);

const LoggedIn = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        initialRouteName: 'HomeScreen',
        drawerLabel: 'Home',
      }),
    },
    YScreen: {
      screen: YScreen,
      navigationOptions: () => ({
        initialRouteName: 'YScreen',
        drawerLabel: 'Y Conference',
      }),
    },
    LogoutScreen: {
      screen: LogoutScreen,
      navigationOptions: () => ({
        initialRouteName: 'LogoutScreen',
        drawerLabel: 'Log out',
        headerMode: 'none',
      }),
    },
    Tabs: {
      screen: LoggedInTabs,
    },
  },
  {
    initialRouteName: 'Tabs',
  },
);

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
        <View style={styles.navigator} />
        <AppContainer />
      </Provider>
    );
  }
}
