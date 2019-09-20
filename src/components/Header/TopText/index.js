import React from 'react';
import { View, Text, TouchableHighlight, Platform } from 'react-native';
import propTypes from 'prop-types';
import { get } from 'lodash';
import convertUnicode from '../../../utils/unicodeChars';
import styles from './styles';

const TopText = props => {
  const { navigation, text, isLogo } = props;
  const currentScreen = get(navigation, 'state.params.menuTitle', null);

  return (
    <View style={styles.logoContainer}>
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => (Platform.OS === 'ios' ? navigation.goBack() : navigation.navigate('MainScreen'))}
      >
        {currentScreen !== 'START' && isLogo && Platform.OS === 'ios' ? (
          <Text style={[styles.backbutton, styles.backbuttonFont]}>{convertUnicode('\u2190')}</Text>
        ) : (
          <React.Fragment>
            {Object.keys(text).map(i => (
              <Text key={text[i]} style={styles.text}>
                {text[i]}
              </Text>
            ))}
          </React.Fragment>
        )}
      </TouchableHighlight>
    </View>
  );
};

export default TopText;

TopText.defaultProps = {
  isLogo: false,
};

TopText.propTypes = {
  navigation: propTypes.shape().isRequired,
  text: propTypes.arrayOf(propTypes.string).isRequired,
  isLogo: propTypes.bool,
};
