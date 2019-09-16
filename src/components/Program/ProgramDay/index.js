/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Text, View, SectionList } from 'react-native';
import propTypes from 'prop-types';
import format from 'date-fns/format';

import schwartzianSort from '../../../utils/sortArrayByTime';
import ProgramSlot from '../ProgramSlot';
import getTracksFromSlots from '../../../utils/getTracksFromSlots';
import styles from './styles';

export default class ProgramDay extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(slot) {
    // console.log('clicked', slot);
  }

  render() {
    const { slots, navigation } = this.props;
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
            renderItem={slot => <ProgramSlot slot={slot} onSelect={() => this.onSelect(slot)} />}
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

ProgramDay.propTypes = {
  slots: propTypes.array.isRequired,
};
