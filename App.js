import React from 'react';
import { Provider } from 'react-redux';
import Store from './Store';
import Start from './src/components/Start';
// React Native
import {
	SafeAreaView,
	StatusBar,
} from 'react-native';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={Store}>
        <StatusBar barStyle="dark-content"/>
        <SafeAreaView>
          {/* Add stack navigation here */}
          <Start />
        </SafeAreaView>
			</Provider>
		);
	}
}
