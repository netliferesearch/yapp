/* eslint-disable operator-linebreak */
import React from 'react';
import { ScrollView, View, Text, Image, BackHandler } from 'react-native';
// Props and Redux
import propTypes from 'prop-types';
import { connect } from 'react-redux';

// Others
import apiToValueChecker from '../../utils/apiToValue';
import SanityBlockContent from '../../components/SanityBlockContent';
import Header from '../../components/Header';
import Card from '../../components/Card';
import styles from './styles';

export class SpeakerScreen extends React.Component {
  componentDidMount() {
    this.willBlurSubscription = this.props.navigation.addListener('willBlur', payload =>
      // eslint-disable-next-line implicit-arrow-linebreak
      BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid(payload)),
    );
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-unused-expressions
    this.willBlurSubscription && this.willBlurSubscription.remove();
  }

  onBackButtonPressAndroid(payload) {
    const { navigation } = this.props;
    if (typeof payload.action.routeName === 'undefined') {
      navigation.navigate('SpeakersScreen');
    }
  }

  render() {
    const { navigation, speakerExtra, speakerWorkshop, speakerTalk } = this.props;

    // Initial load from components/Speakers with pressed list data.
    const title = navigation.getParam('title', null);
    const image = navigation.getParam('image', null);
    const slug = navigation.getParam('slug', null);
    const position = navigation.getParam('position', null);
    const employer = navigation.getParam('employer', null);

    // Speaker extra props data.
    const about = apiToValueChecker(speakerExtra, 'about', 'nb') ? speakerExtra.about.nb : null;
    // Speaker workshop props data.
    const workshopName = apiToValueChecker(speakerWorkshop, 'title', 'nb') ? speakerWorkshop.title.nb : null;
    const workshopSlug = apiToValueChecker(speakerWorkshop, 'slug', 'nb') ? speakerWorkshop.slug.nb : null;
    const workshopDescription = apiToValueChecker(speakerWorkshop, 'description') ? speakerWorkshop.description : null;

    // Speaker talk props data.
    const talkName = apiToValueChecker(speakerTalk, 'title', 'nb') ? speakerTalk.title.nb : null;
    const talkSlug = apiToValueChecker(speakerTalk, 'slug', 'nb', 'current') ? speakerTalk.slug.nb.current : null;
    const talkDescription = apiToValueChecker(speakerTalk, 'description') ? speakerTalk.description : null;
    const talkProps = {
      talkName,
      workshopName,
      talkDescription,
      workshopDescription,
      slug: talkSlug,
      userSlug: slug,
      userName: title,
      userImage: image,
      userAbout: about,
      userPosition: position,
      userEmployer: employer,
      backbutton: true,
    };

    return (
      <ScrollView style={styles.screenWrapper}>
        <Header {...this.props} />
        <View style={styles.screenInnerWrapper}>
          <View style={styles.heroWrapper}>
            <View style={styles.hero}>
              {title && (
                <Text style={[styles.heroFont, styles.heroFontProperties]}>
                  {title
                    .split(' ')
                    .join('\n')
                    .toUpperCase()}
                </Text>
              )}
            </View>
            <View style={styles.heroImageWrapper}>
              {image && <Image style={styles.heroImage} source={{ uri: image }} resizeMode="cover" />}
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
                pressed={() => navigation.navigate('TalkScreen', talkProps)}
                options={{
                  arrow: true,
                  align: 'center',
                }}
              />
            </View>
          )}
          {workshopSlug && workshopName && (
            <View style={styles.content}>
              <Card
                title="WORKSHOP AT Y"
                text={workshopName.toUpperCase()}
                pressed={() => navigation.navigate('WorkshopScreen', talkProps)}
                options={{
                  arrow: true,
                  align: 'center',
                }}
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
