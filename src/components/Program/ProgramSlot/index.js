/* eslint-disable no-underscore-dangle */
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import propTypes from 'prop-types';
import format from 'date-fns/format';
import Star from '../../../images/star';
import apiToValueChecker from '../../../utils/apiToValue';

import styles from './styles';

export const ProgramSlot = props => {
  const { slot } = props;

  // Set content variables for program slot and for deep linking props.
  const programStart = apiToValueChecker(slot, 'item', 'startTime') ? slot.item.startTime : '';
  const programEnd = apiToValueChecker(slot, 'item', 'endTime') ? slot.item.endTime : null;

  const start = format(new Date(programStart), 'kk:mm');
  const end = format(new Date(programEnd), 'kk:mm');

  const sessionObject = apiToValueChecker(slot, 'item', 'session') ? slot.item.session : null;

  const programTitle = sessionObject && apiToValueChecker(sessionObject, 'title', 'nb') ? sessionObject.title.nb : null;
  const programScene =
    sessionObject && apiToValueChecker(sessionObject, 'scene', 'title', 'nb') ? sessionObject.scene.title.nb : null;
  const programObject =
    sessionObject && apiToValueChecker(sessionObject, 'foredragsholdere') ? sessionObject.foredragsholdere : null;
  const programImage = programObject && apiToValueChecker(programObject[0], 'image') ? programObject[0].image : null;
  const userName =
    programObject && apiToValueChecker(programObject[0], 'title', 'nb') ? programObject[0].title.nb : null;
  const userSlug =
    programObject && apiToValueChecker(programObject[0], 'slug', 'nb', 'current')
      ? programObject[0].slug.nb.current
      : null;
  const employer =
    programObject && apiToValueChecker(programObject[0], 'employer', 'nb') ? programObject[0].employer.nb : null;

  const uid = programObject && apiToValueChecker(programObject[0], '_id') ? programObject[0]._id : null;

  const programData = {
    talkName: programTitle,
    userImage: programImage,
    slug: userSlug,
    userEmployer: employer,
    userName,
    uid,
    backbutton: false,
  };

  return (
    <View style={styles.programSlotContainer}>
      <View style={styles.leftColumn}>
        <View>
          {programStart && <Text style={styles.times}>{`${start}${programEnd && ' -'}`}</Text>}
          {programEnd && <Text style={styles.times}>{end}</Text>}
        </View>
        <View style={styles.star}>
          <TouchableHighlight onPress={() => console.log('toggle star')} underlayColor="transparent">
            <Star checked={false} />
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.rightColumn}>
        {uid ? (
          <TouchableHighlight onPress={() => props.onSelect(programData)} underlayColor="transparent">
            <React.Fragment>
              <View>
                {programTitle && (
                  <Text style={[styles.titleFont, styles.titleFontSelectedProperties]}>
                    {programTitle.toUpperCase()}
                  </Text>
                )}
              </View>
              {programScene && <Text>{programScene}</Text>}
            </React.Fragment>
          </TouchableHighlight>
        ) : (
          <React.Fragment>
            {programTitle && (
              <Text style={[styles.titleFont, styles.titleFontProperties]}>{programTitle.toUpperCase()}</Text>
            )}
            {programScene && <Text>{programScene}</Text>}
          </React.Fragment>
        )}
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
  onSelect: propTypes.func.isRequired,
};
