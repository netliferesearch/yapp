import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import BlockContent from '@sanity/block-content-to-react';
// Props and Redux
import propTypes from 'prop-types';

// Others
import Header from '../../components/Header';
import styles from './styles';

export default class SpeakerScreen extends React.Component {
  render() {
    const { navigation, speaker } = this.props;
    const { about } = speaker;

    const title = navigation.getParam('title', '');
    const position = navigation.getParam('position', '');
    const employer = navigation.getParam('employer', '');
    const image = navigation.getParam('image', '');
    const speak = navigation.getParam('speak', '');
    const slug = navigation.getParam('slug', '');

    const speakerAbout = typeof about !== 'undefined' && typeof about.nb !== 'undefined' ? about.nb : null;

    return (
      <ScrollView style={styles.screenWrapper}>
        <Header {...this.props} />
        <View style={styles.screenInnerWrapper}>
          <View style={styles.heroWrapper}>
            <View style={styles.hero}>
              <Text style={[styles.heroFont, styles.heroFontProperties]}>
                {title
                  .split(' ')
                  .join('\n')
                  .toUpperCase()}
              </Text>
            </View>
            <View style={styles.heroImageWrapper}>
              <Image style={styles.heroImage} source={{ uri: image }} resizeMode="cover" />
            </View>
          </View>
          <View style={styles.content}>
            {speakerAbout && <BlockContent blocks={speakerAbout} />}
            <Text>{slug}</Text>
            <Text>{employer}</Text>
            <Text>{image}</Text>
            <Text>{position}</Text>
            <Text>{speak}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

SpeakerScreen.defaultProps = {
  speaker: {},
};

SpeakerScreen.propTypes = {
  speaker: propTypes.shape(),
  readSpeakerExtra: propTypes.func.isRequired,
  navigation: propTypes.shape().isRequired,
};
