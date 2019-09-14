import React from 'react';
import { View, ScrollView, Text, Image, Dimensions } from 'react-native';
import Header from '../../components/Header';
import ZoomImage from '../../components/ZoomImage';
import convertUnicode from '../../utils/unicodeChars';
import tent from '../../images/tent.jpg';
import venues from '../../images/venues.jpg';
import { theme, font, screen } from '../../styles/theme';

const YMapScreen = props => {
  const imageSize = Dimensions.get('window').width - theme.margins.md * 2;
  return (
    <View style={screen.wrapper}>
      <Header {...props} />
      <ScrollView style={screen.innerWrapper}>
        <Text style={[font.xlBold, { marginBottom: theme.margins.md }]}>Y MAP</Text>
        <Image style={[{ width: imageSize, height: imageSize }, { marginBottom: theme.margins.xl }]} source={venues} />
        <View style={theme.centeredContent}>
          <Text style={[font.xlBold, { marginBottom: theme.margins.sm }]}>Y TENT</Text>
          <Text style={[font.mdBold, { marginBottom: theme.margins.md }]}>
            {convertUnicode('\u2192')}
            {convertUnicode('\u2192')}
            PINCH TO ZOOM
            {convertUnicode('\u2190')}
            {convertUnicode('\u2190')}
          </Text>
        </View>
        <ZoomImage image={tent} />
      </ScrollView>
    </View>
  );
};

export default YMapScreen;
