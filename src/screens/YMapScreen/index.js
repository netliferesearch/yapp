import React from 'react';
import { View, ScrollView, Text, Image, Dimensions } from 'react-native';
import { Asset } from 'expo-asset';
import Header from '../../components/Header';
import ZoomImage from '../../components/ZoomImage';
import convertUnicode from '../../utils/unicodeChars';
import { theme, font, screen } from '../../styles/theme';

const tent = Asset.fromModule(require('../../../assets/images/tent.png')).uri;
const venues = Asset.fromModule(require('../../../assets/images/venues.png')).uri;

const YMapScreen = props => {
  const imageSize = Dimensions.get('window').width - theme.margins.md * 2;
  return (
    <View style={screen.wrapper}>
      <Header {...props} />
      <ScrollView style={screen.innerWrapper}>
        <Text style={[font.xlBold, { marginBottom: theme.margins.md }]}>Y MAP</Text>
        <Image
          style={[{ width: imageSize, height: imageSize }, { marginBottom: theme.margins.xl }]}
          source={{ uri: venues }}
        />
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
        <ZoomImage image={{ uri: tent }} />
      </ScrollView>
    </View>
  );
};

export default YMapScreen;
