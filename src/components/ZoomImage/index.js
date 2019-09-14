import React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import propTypes from 'prop-types';
import { theme, font } from '../../styles/theme';

const ZoomImage = props => {
  const { title, text, image } = props;
  const imageSize = Dimensions.get('window').width - theme.margins.md * 2;

  return (
    <View>
      {title && <Text style={[font.xlBold, text ? theme.margins.sm : theme.margins.md]}>{title}</Text>}
      {text && <Text style={[font.smRegular, theme.margins.md]}>{text}</Text>}
      {image && (
        <ImageZoom cropWidth={imageSize} cropHeight={imageSize} imageWidth={imageSize} imageHeight={imageSize}>
          <Image style={{ width: imageSize, height: imageSize }} source={image} />
        </ImageZoom>
      )}
    </View>
  );
};

export default ZoomImage;

ZoomImage.defaultProps = {
  title: null,
  text: null,
  image: null,
};

ZoomImage.propTypes = {
  title: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  text: propTypes.oneOfType([propTypes.bool, propTypes.string]),
  image: propTypes.oneOfType([propTypes.bool, propTypes.any]),
};
