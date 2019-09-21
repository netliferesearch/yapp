/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Text, View, SectionList } from 'react-native';
import propTypes from 'prop-types';
import format from 'date-fns/format';
import { connect } from 'react-redux';
import readSpeakerExtra from '../../../actions/SpeakerAction';
import readSpeakerWorkshop from '../../../actions/SpeakerWorkshopAction';
import readSpeakerTalk from '../../../actions/SpeakerTalkAction';

import EmptyProgram from '../EmptyProgram';
import ProgramSlot from '../ProgramSlot';
import getTracksFromSlots from '../../../utils/getTracksFromSlots';
import styles from './styles';

class ProgramDay extends React.Component {
  onSelect = slot => {
    const { navigation } = this.props;
    if (slot) {
      // We are underfetched here. Fetch more content by ids and navigate.
      slot.uid && this.props.readSpeakerTalk(slot.uid);
      slot.uid && this.props.readSpeakerWorkshop(slot.uid);
      slot.slug && this.props.readSpeakerExtra(slot.slug);
      navigation.navigate('TalkScreen', slot);
    }
  };

  render() {
    const { slots, isFavorite, toggleFavorite, slotFilter } = this.props;

    // filter only slots yielding a truthy value for the slotFilter predicate
    const filteredSlots = (slots || []).filter(slotFilter);

    return (
      <View style={styles.container}>
        {filteredSlots && (
          <SectionList
            style={styles.slot}
            sections={getTracksFromSlots(filteredSlots)}
            keyExtractor={slot => `program-slot-${slot._key}`}
            ListEmptyComponent={(slots.length && !filteredSlots.length && EmptyProgram) || null}
            renderItem={slot => (
              <ProgramSlot
                slot={slot}
                onSelect={programSlug => this.onSelect(programSlug)}
                isFavorite={isFavorite}
                toggleFavorite={toggleFavorite}
              />
            )}
            renderSectionHeader={({ section: { index, title, startTime, endTime } }) => (
              <Text style={[styles.headingFont, styles.heading, index > 0 ? styles.headingExtraMargin : null]}>
                {title && title.toUpperCase()}
                {'\n'}
                {startTime && format(new Date(startTime), 'kk:mm')}-{endTime && format(new Date(endTime), 'kk:mm')}
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

export default connect(
  mapStateToProps,
  {
    readSpeakerExtra,
    readSpeakerWorkshop,
    readSpeakerTalk,
  },
)(ProgramDay);

ProgramDay.defaultProps = {
  speakerExtra: {},
  speakerWorkshop: {},
  speakerTalk: {},
  readSpeakerExtra: f => f,
  readSpeakerWorkshop: f => f,
  readSpeakerTalk: f => f,
  slotFilter: f => f,
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
  isFavorite: propTypes.func.isRequired,
  toggleFavorite: propTypes.func.isRequired,
  slotFilter: propTypes.func, // predicate used to filter slots
};
