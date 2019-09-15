import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import propTypes from 'prop-types';
import convertUnicode from '../../utils/unicodeChars';
import styles from './styles';
import { theme, font } from '../../styles/theme';

const Card = props => {
  const { title, text, options } = props;
  const { arrow, align, isTwoThirds, backgroundBlack, switchFontSizes } = options;

  return (
    <View
      style={[
        styles.card,
        { backgroundColor: backgroundBlack ? theme.colors.black : theme.colors.green },
        isTwoThirds && { width: '66.666666666%' },
      ]}
    >
      <TouchableHighlight underlayColor="transparent" onPress={() => props.pressed()}>
        <View
          style={[
            styles.cardInner,
            /* eslint-disable */
            align === 'left'
              ? { alignItems: 'flex-start' }
              : align === 'center'
              ? { alignItems: 'center' }
              : align === 'right' && { alignItems: 'flex-end' },
            /* eslint-enable */
          ]}
        >
          {title && (
            <Text
              style={[
                switchFontSizes
                  ? [font.xlBold, { marginBottom: theme.margins.xl }]
                  : [font.smBold, { marginBottom: theme.margins.md }],
                backgroundBlack && { color: theme.colors.white },
                align && { textAlign: align },
              ]}
            >
              {title}
            </Text>
          )}
          {text && (
            <Text
              style={[
                switchFontSizes ? font.smRegular : font.xlBold,
                backgroundBlack && { color: theme.colors.white },
                align && { textAlign: align },
              ]}
            >
              {text}
            </Text>
          )}
          {arrow && (
            <Text
              style={[
                switchFontSizes ? font.smBold : font.xlBold,
                styles.cardArrow,
                backgroundBlack && { color: theme.colors.white },
                align && { textAlign: align },
              ]}
            >
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
  options: {
    arrow: false,
    align: false,
    isTwoThirds: false,
    backgroundBlack: false,
    switchFontSizes: false,
  },
};

Card.propTypes = {
  title: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  text: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  pressed: propTypes.func,
  options: propTypes.shape(),
};
