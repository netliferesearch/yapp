/* eslint-disable operator-linebreak */
import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import BlockContent from '@sanity/block-content-to-react';
// Props and Redux
import propTypes from 'prop-types';
import { connect } from 'react-redux';

// Others
import Header from '../../components/Header';
import styles from './styles';

export class SpeakerScreen extends React.Component {
  render() {
    const { navigation, speakerExtra } = this.props;
    const title = navigation.getParam('title', '');
    const image = navigation.getParam('image', '');
    // const position = navigation.getParam('position', '');
    // const employer = navigation.getParam('employer', '');
    // const speak = navigation.getParam('speak', '');
    // const slug = navigation.getParam('slug', '');
    const about =
      typeof speakerExtra !== 'undefined' &&
      typeof speakerExtra.about !== 'undefined' &&
      typeof speakerExtra.about.nb !== 'undefined'
        ? speakerExtra.about.nb
        : null;

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
          {about && (
            <View style={styles.content}>
              <BlockContent blocks={about} />
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { speakerExtraRead } = state;
  return {
    speakerExtra: speakerExtraRead.speaker,
  };
};

export default connect(
  mapStateToProps,
  null,
)(SpeakerScreen);

SpeakerScreen.defaultProps = {
  speaker: {},
  speakerExtra: {},
};

SpeakerScreen.propTypes = {
  speaker: propTypes.shape(),
  speakerExtra: propTypes.shape(),
  readSpeaker: propTypes.func.isRequired,
  navigation: propTypes.shape().isRequired,
};
