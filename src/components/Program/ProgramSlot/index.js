/* eslint-disable no-underscore-dangle */
import React from 'react';
import { View, Text } from 'react-native';
import propTypes from 'prop-types';
import apiToValueChecker from '../../../utils/apiToValue';
import styles from './styles';

export const ProgramSlot = props => {
  const { slot } = props;
  const programStart = apiToValueChecker(slot, 'item', 'startTime') ? slot.item.startTime : '';
  const programEnd = apiToValueChecker(slot, 'item', 'endTime') ? slot.item.endTime : null;
  console.log(programStart);
  const start = programStart.substring(programStart.indexOf('T') + 1).substring(0, 5);
  const end = programEnd.substring(programEnd.indexOf('T') + 1).substring(0, 5);

  const sessionObject = apiToValueChecker(slot, 'item', 'session') ? slot.item.session : null;
  const programTitle = sessionObject && apiToValueChecker(sessionObject, 'title', 'nb') ? sessionObject.title.nb : null;
  const programSlug =
    sessionObject && apiToValueChecker(sessionObject, 'slug', 'nb', 'current') ? sessionObject.slug.nb.current : null;
  const programTrack =
    sessionObject && apiToValueChecker(sessionObject, 'track', 'title', 'nb') ? sessionObject.track.title.nb : null;
  return (
    <View style={styles.programSlotContainer}>
      <View style={styles.leftColumn}>
        <View>
          {programStart && <Text style={styles.times}>{`${start}${programEnd && ' -'}`}</Text>}
          {programEnd && <Text style={styles.times}>{end}</Text>}
        </View>
      </View>
      <View style={styles.rightColumn}>
        {programTitle && (
          <Text style={[styles.titleFont, styles.titleFontProperties]}>{programTitle.toUpperCase()}</Text>
        )}
        {programTrack && <Text>Track: {programTrack}</Text>}
      </View>
    </View>
  );
};

export default ProgramSlot;

ProgramSlot.defaultProps = {
  slot: {},
};

ProgramSlot.propTypes = {
  slot: propTypes.shape(),
};
