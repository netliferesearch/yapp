/* eslint-disable no-underscore-dangle */
// React, RN
import React from 'react';
import { FlatList } from 'react-native';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import readSpeakerExtra from '../../actions/SpeakerAction';
import readSpeakerWorkshop from '../../actions/SpeakerWorkshopAction';
import readSpeakerTalk from '../../actions/SpeakerTalkAction';

// Others
import SpeakerList from './SpeakerList';
import styles from './styles';

export class Speakers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSelect(speakerData = null) {
    if (speakerData) {
      const { navigation } = this.props;
      // We are underfetched here. Fetch speakerdata on slug and speaker id and navigate.
      this.props.readSpeakerExtra(speakerData.slug);
      this.props.readSpeakerWorkshop(speakerData.uid);
      this.props.readSpeakerTalk(speakerData.uid);
      navigation.navigate('SpeakerScreen', speakerData);
    }
  }

  render() {
    const { speakers } = this.props;

    return (
      <React.Fragment>
        {speakers && (
          <FlatList
            style={styles.speakers}
            data={speakers}
            extraData={this.props}
            keyExtractor={speaker => `speaker-list${speaker._id}`}
            renderItem={speaker => (
              <React.Fragment>
                <SpeakerList speakers={speaker} onSelect={speakerData => this.onSelect(speakerData)} />
              </React.Fragment>
            )}
          />
        )}
      </React.Fragment>
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
  {
    readSpeakerExtra,
    readSpeakerWorkshop,
    readSpeakerTalk,
  },
)(Speakers);

Speakers.defaultProps = {
  speakers: {},
  readSpeakerExtra: () => {},
  readSpeakerWorkshop: () => {},
  readSpeakerTalk: () => {},
};

Speakers.propTypes = {
  speakers: propTypes.any,
  readSpeakerExtra: propTypes.func,
  readSpeakerWorkshop: propTypes.func,
  readSpeakerTalk: propTypes.func,
  navigation: propTypes.any.isRequired,
};
