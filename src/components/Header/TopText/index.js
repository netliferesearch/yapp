import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import propTypes from 'prop-types';
import styles from './styles';

const TopText = props => {
  const { navigation, text } = props;
  return (
    <View style={styles.logoContainer}>
      <TouchableHighlight underlayColor="transparent" onPress={() => navigation.navigate('MainScreen')}>
        <React.Fragment>
          {Object.keys(text).map(i => (
            <Text key={text[i]} style={styles.text}>
              {text[i]}
            </Text>
          ))}
        </React.Fragment>
      </TouchableHighlight>
    </View>
  );
};

export default TopText;

TopText.propTypes = {
  navigation: propTypes.shape().isRequired,
  text: propTypes.arrayOf(propTypes.string).isRequired,
};
