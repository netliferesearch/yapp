/* eslint-disable no-underscore-dangle */
import React from 'react';
import { View, FlatList } from 'react-native';
import propTypes from 'prop-types';
import schwartzianSort from '../../../utils/sortArrayByTime';
import ProgramSlot from '../ProgramSlot';
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
          <FlatList
            style={styles.slot}
            data={sortedSlots}
            keyExtractor={slot => `program-slot-${slot.trackKey}`}
            renderItem={slot => <ProgramSlot slot={slot} onSelect={() => this.onSelect(slot)} />}
          />
        )}
      </View>
    );
  }
}

ProgramDay.propTypes = {
  slots: propTypes.array.isRequired,
};
