import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import Logo from '../images/logo';
import theme from '../styles/theme';

const styles = StyleSheet.create({
  screenWrapper: {
    padding: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: theme.colors.yummyPink,
  },
  // TODO: remove input styles and create separate input component.
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
  },
  logoWrapper: {
    textAlign: 'center',
  }
});

export default class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: ''
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.screenWrapper}>
        <View style={styles.logoWrapper}>
          <Logo/>
        </View>
        <Text>What's in it for me text.</Text>
        <Text>Badge id</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
          title="Go to the Home Screen"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}