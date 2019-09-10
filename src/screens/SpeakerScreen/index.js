/* eslint-disable operator-linebreak */
import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import BlockContent from '@sanity/block-content-to-react';
// Props and Redux
import propTypes from 'prop-types';
import { connect } from 'react-redux';

// Others
import SanityBlockContent from '../../components/SanityBlockContent';
import Header from '../../components/Header';
import Card from '../../components/Card';
import styles from './styles';

export class SpeakerScreen extends React.Component {
  render() {
    const { navigation, speakerExtra, speakerWorkshop, speakerTalk } = this.props;

    // Initial load from components/Speakers with pressed list data.
    const title = navigation.getParam('title', '');
    const image = navigation.getParam('image', '');
    const slug = navigation.getParam('slug', '');
    const position = navigation.getParam('position', '');
    const employer = navigation.getParam('employer', '');
    // const speak = navigation.getParam('speak', '');

    // Speaker extra props data.
    const about =
      typeof speakerExtra.about !== 'undefined' && typeof speakerExtra.about.nb !== 'undefined'
        ? speakerExtra.about.nb
        : null;

    // Speaker workshop props data.
    const workshopName =
      typeof speakerWorkshop.title !== 'undefined' && typeof speakerWorkshop.title.nb !== 'undefined'
        ? speakerWorkshop.title.nb
        : null;
    const workshopSlug =
      typeof speakerWorkshop.slug !== 'undefined' && typeof speakerWorkshop.slug.nb !== 'undefined'
        ? speakerWorkshop.slug.nb
        : null;
    const workshopDescription = typeof speakerWorkshop.description !== 'undefined' ? speakerWorkshop.description : null;

    // Speaker talk props data.
    const talkName =
      typeof speakerTalk.title !== 'undefined' && typeof speakerTalk.title.nb !== 'undefined'
        ? speakerTalk.title.nb
        : null;
    const talkSlug =
      typeof speakerTalk.slug !== 'undefined' && typeof speakerTalk.slug.nb !== 'undefined'
        ? speakerTalk.slug.nb
        : null;
    const talkDescription = typeof speakerTalk.description !== 'undefined' ? speakerTalk.description : null;

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
              <SanityBlockContent blocks={about} />
            </View>
          )}
          {talkSlug && talkName && (
            <View style={styles.content}>
              <Card
                title="TALK AT Y"
                text={talkName.toUpperCase()}
                arrow
                pressed={() =>
                  // Pass on user and talk data.
                  // eslint-disable-next-line implicit-arrow-linebreak
                  navigation.navigate('TalkScreen', {
                    name: talkName,
                    description: talkDescription,
                    slug: talkSlug,
                    userSlug: slug,
                    userName: title,
                    userImage: image,
                    userAbout: about,
                    userPosition: position,
                    userEmployer: employer,
                  })
                }
              />
            </View>
          )}
          {workshopSlug && workshopName && (
            <View style={styles.content}>
              <Card
                title="WORKSHOP AT Y"
                text={workshopName.toUpperCase()}
                arrow
                pressed={() =>
                  // Pass on user and workshop data.
                  // eslint-disable-next-line implicit-arrow-linebreak
                  navigation.navigate('WorkshopScreen', {
                    name: workshopName,
                    description: workshopDescription,
                    slug: workshopSlug,
                    userSlug: slug,
                    userName: title,
                    userImage: image,
                    userAbout: about,
                    userPosition: position,
                    userEmployer: employer,
                  })
                }
              />
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  const { speakerExtraRead, speakerWorkshopRead, speakerTalkRead } = state;
  return {
    speakerExtra: speakerExtraRead.speaker,
    speakerWorkshop: speakerWorkshopRead.workshop,
    speakerTalk: speakerTalkRead.talk,
  };
};

export default connect(
  mapStateToProps,
  null,
)(SpeakerScreen);

SpeakerScreen.defaultProps = {
  speaker: {},
  speakerExtra: {},
  speakerWorkshop: {},
  speakerTalk: {},
};

SpeakerScreen.propTypes = {
  speaker: propTypes.any,
  speakerExtra: propTypes.any,
  speakerWorkshop: propTypes.any,
  speakerTalk: propTypes.any,
  navigation: propTypes.shape().isRequired,
};
