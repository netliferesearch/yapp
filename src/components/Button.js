import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import propTypes from 'prop-types';

import styles from '../styles/ButtonStyles';

export default class Button extends React.Component {
  render() {
    const { type, value } = this.props;

    return (
      <View>
        <TouchableOpacity
          style={type === 'primary' ? styles.primary : styles.secondary}
          onPress={() => this.props.onPressCallback()}
        >
          <Text style={styles.buttonText}>{value}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Button.defaultProps = {
  type: 'primary',
  value: '',
};

Button.propTypes = {
  type: propTypes.string,
  value: propTypes.string,
  onPressCallback: propTypes.func.isRequired,
};
