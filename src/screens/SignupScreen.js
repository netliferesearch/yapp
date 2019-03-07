import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import theme from '../styles/theme';

const styles = StyleSheet.create({
  screenWrapper: {
    padding: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: theme.colors.yummyPink,
  },
  input: {
    width: '100%',
    height: 40,
    padding: 5,
    borderBottomColor: theme.colors.yellingRed,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderLeftWidth: 0,
    backgroundColor: theme.colors.yetiWhite,
  }
});

export default class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.screenWrapper}>
        <Text>YAPP!</Text>
        <Text>What's in it for me.</Text>
        <Text>Badge id</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }
}