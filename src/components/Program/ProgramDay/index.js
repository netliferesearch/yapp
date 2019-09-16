/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Text, View, SectionList } from 'react-native';
import propTypes from 'prop-types';
import format from 'date-fns/format';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import readSpeakerExtra from '../../../actions/SpeakerAction';
import readSpeakerWorkshop from '../../../actions/SpeakerWorkshopAction';
import readSpeakerTalk from '../../../actions/SpeakerTalkAction';

import schwartzianSort from '../../../utils/sortArrayByTime';
import ProgramSlot from '../ProgramSlot';
import getTracksFromSlots from '../../../utils/getTracksFromSlots';
import styles from './styles';

export class ProgramDay extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(slot) {
    const { navigation } = this.props;
    if (slot && slot.uid) {
      // We are underfetched. Fetch more content and navigate.
      this.props.readSpeakerTalk(slot.uid);
      this.props.readSpeakerExtra(slot.slug);
      navigation.navigate('TalkScreen', slot);
    }
  }

  render() {
    const { slots } = this.props;
    let sortedSlots = [];

    slots.map(track => {
      const startTime = typeof track.startTime !== 'undefined' ? track.startTime : null;
      const endTime = typeof track.endTime !== 'undefined' ? track.endTime : null;
      const trackSession = typeof track.session !== 'undefined' ? track.session : null;
      const trackKey = typeof track._key !== 'undefined' ? track._key : null;

      if (startTime && trackSession) {
        sortedSlots.push({
          trackKey,
          startTime,
          endTime,
          session: trackSession,
        });
      }
      return false;
    });

    sortedSlots = schwartzianSort(
      sortedSlots,
      i => {
        return i.startTime;
      },
      true,
    );

    return (
      <View style={styles.container}>
        {slots && (
          <SectionList
            style={styles.slot}
            sections={getTracksFromSlots(slots)}
            keyExtractor={slot => `program-slot-${slot._key}`}
            renderItem={slot => <ProgramSlot slot={slot} onSelect={programSlug => this.onSelect(programSlug)} />}
            renderSectionHeader={({ section: { index, title, startTime, endTime } }) => (
              <Text style={[styles.headingFont, styles.heading, index > 0 ? styles.headingExtraMargin : null]}>
                {title.toUpperCase()}
                {'\n'}
                {format(new Date(startTime), 'kk:mm')}-{format(new Date(endTime), 'kk:mm')}
              </Text>
            )}
          />
        )}
      </View>
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
)(ProgramDay);

ProgramDay.defaultProps = {
  speakerExtra: {},
  speakerWorkshop: {},
  speakerTalk: {},
  readSpeakerExtra: () => {},
  readSpeakerWorkshop: () => {},
  readSpeakerTalk: () => {},
};

ProgramDay.propTypes = {
  speakerExtra: propTypes.any,
  speakerWorkshop: propTypes.any,
  speakerTalk: propTypes.any,
  readSpeakerExtra: propTypes.func,
  readSpeakerWorkshop: propTypes.func,
  readSpeakerTalk: propTypes.func,
  slots: propTypes.array.isRequired,
  navigation: propTypes.shape().isRequired,
};
