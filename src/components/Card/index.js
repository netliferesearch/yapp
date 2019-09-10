import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import propTypes from 'prop-types';
import convertUnicode from '../../utils/unicodeChars';
import styles from './styles';

const Card = props => {
  const { title, text, arrow, align, isTwoThirds } = props;

  return (
    <View style={[styles.card, isTwoThirds && { width: '66.666666666%' }]}>
      <TouchableHighlight underlayColor="transparent" onPress={() => props.pressed()}>
        <View style={[styles.cardInner]}>
          {title && (
            <Text style={[styles.cardTitleFont, styles.cardTitle, align && { textAlign: align }]}>{title}</Text>
          )}
          {text && (
            <Text style={[styles.cardText, align ? { textAlign: align } : styles.cardTextPosition]}>{text}</Text>
          )}
          {arrow && (
            <Text style={[styles.cardText, styles.cardArrow, align ? { textAlign: align } : styles.cardTextPosition]}>
              {convertUnicode('\u2192')}
            </Text>
          )}
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Card;

Card.defaultProps = {
  title: null,
  text: null,
  pressed: () => {},
  arrow: false,
  align: false,
  isTwoThirds: false,
};

Card.propTypes = {
  title: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  text: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  pressed: propTypes.func,
  arrow: propTypes.bool,
  align: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  isTwoThirds: propTypes.bool,
};
