import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/ScreenLoadingStyles';

export default class LogoutScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.screenWrapper}>
        <Text>This screen could have speakers, map, times etc.</Text>
      </View>
    );
  }
}
