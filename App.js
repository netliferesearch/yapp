import React from 'react';
import { Dimensions, SafeAreaView, StatusBar, View } from 'react-native';
import { Font, AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Store from './Store';
import MainMenu from './src/components/MainMenu';
import StackNavigatorRoutes from './src/routes/StackNavigatorRoutes';
import NetlifeSansYBold from './assets/fonts/NetlifeSansY-Bold.ttf';
import NetlifeSansYRegular from './assets/fonts/NetlifeSansY-Regular.ttf';
import { theme } from './src/styles/theme';

// DrawerNavigaton
const MainMenuContainer = createDrawerNavigator(StackNavigatorRoutes, {
  drawerWidth: Dimensions.get('window').width,
  drawerPosition: 'right',
  contentComponent: props => <MainMenu navigation={props.navigation} drawerProps={{ ...props }} />,
});

const AppContainer = createAppContainer(MainMenuContainer);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  componentDidMount() {
    this.loadFontsAsync();
  }

  async loadFontsAsync() {
    await Font.loadAsync({ 'NetlifeSansY-Bold': NetlifeSansYBold });
    await Font.loadAsync({ 'NetlifeSansY-Regular': NetlifeSansYRegular });
    this.setState({ isReady: true });
  }

  render() {
    const { isReady } = this.state;

    return isReady ? (
      <Provider store={Store}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={theme.safeArea}>
          <View style={theme.appWrapper}>
            <AppContainer />
          </View>
        </SafeAreaView>
      </Provider>
    ) : (
      <AppLoading startAsync={this.loadFontsAsync} onFinish={() => this.setState({ isReady: true })} />
    );
  }
}
