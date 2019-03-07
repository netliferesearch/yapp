import React from "react";
import { View, Text, TextInput } from "react-native";
import theme from '../../styles/theme';


export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.placeholder
    };
  }
  render() {
    return(
      <View style={ styles.container }>
        <Text style={ styles.label }>{ this.props.label }</Text>
        <TextInput
          style={ styles.input }
          onChangeText={(text) => this.setState({text})}
          value={ this.state.text }
        />
      </View>
    );
  }
}

const styles = {
    container: {
      width: '100%',
    },
    label: {
      fontFamily: 'NetlifeY',
      fontSize: 17,
      paddingTop: 5,
      paddingBottom: 7
    },
    input: {
      height: 40,
      padding: 7,
      borderBottomColor: theme.colors.yellingRed,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderBottomWidth: 2,
      borderLeftWidth: 0,
      backgroundColor: theme.colors.yetiWhite,
      color: '#000',
    }
}