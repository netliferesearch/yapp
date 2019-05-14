import React from 'react';
import { View, Text, TextInput } from 'react-native';
import propTypes from 'prop-types';

import styles from '../styles/InputStyles';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      error: false,
    };
    this.handleTyping = this.handleTyping.bind(this);
  }

  handleTyping(userInput) {
    this.setState({
      text: userInput,
    });

    this.props.inputValue(userInput);
  }

  render() {
    const { type, label } = this.props;
    const { error, text } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        {error && <Text style={styles.error}>Oops! You forgot this field.</Text>}
        <TextInput
          secureTextEntry={type === 'password'}
          style={styles.input}
          onChangeText={userInput => this.handleTyping(userInput)}
          value={text}
        />
      </View>
    );
  }
}

Input.defaultProps = {
  label: '',
  type: 'text',
};

Input.propTypes = {
  label: propTypes.string,
  type: propTypes.string,
  inputValue: propTypes.func.isRequired,
};
