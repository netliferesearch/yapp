/* eslint-disable no-underscore-dangle */
// React, RN
import React from 'react';
import { FlatList } from 'react-native';
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
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
      this.props.readSpeakerExtra(speakerData.slug);
      this.props.readSpeakerWorkshop(speakerData.uid);
      this.props.readSpeakerTalk(speakerData.uid);
      navigation.navigate('SpeakerScreen', speakerData);
    }
  }

  render() {
    const { speakers, speakerExtra, navigation, speakerWorkshop, speakerTalk } = this.props;

    return (
      <React.Fragment>
        {speakers && (
          <FlatList
            style={styles.speakers}
            data={speakers}
            extraData={this.props}
            keyExtractor={speaker => `speaker-list${speaker._id}`}
            renderItem={speaker => (
              <SpeakerList
                speakers={speaker}
                navigation={navigation}
                speakerExtra={speakerExtra}
                speakerWorkshop={speakerWorkshop}
                speakerTalk={speakerTalk}
                onSelect={speakerData => this.onSelect(speakerData)}
              />
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

// Make actions accessable from props
// eslint-disable-next-line arrow-body-style
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      readSpeakerExtra,
      readSpeakerWorkshop,
      readSpeakerTalk,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Speakers);

Speakers.defaultProps = {
  speakers: {},
  speakerExtra: {},
  speakerWorkshop: {},
  speakerTalk: {},
  readSpeakerExtra: () => {},
  readSpeakerWorkshop: () => {},
  readSpeakerTalk: () => {},
};

Speakers.propTypes = {
  speakers: propTypes.any,
  speakerExtra: propTypes.any,
  speakerWorkshop: propTypes.any,
  speakerTalk: propTypes.any,
  readSpeakerExtra: propTypes.func,
  readSpeakerWorkshop: propTypes.func,
  readSpeakerTalk: propTypes.func,
  navigation: propTypes.any.isRequired,
};
