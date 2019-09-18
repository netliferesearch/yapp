/* eslint-disable no-underscore-dangle */
import React from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import propTypes from 'prop-types';
import { get } from 'lodash';
import format from 'date-fns/format';

import Star from '../../../images/star';
import styles from './styles';

export const ProgramSlot = props => {
  const { slot, isFavorite, toggleFavorite } = props;

  const programStart = get(slot, 'item.startTime', null);
  const programEnd = get(slot, 'item.endTime', null);
  const start = programStart ? format(new Date(programStart), 'kk:mm') : '';
  const end = programEnd ? format(new Date(programEnd), 'kk:mm') : '';

  const sessionObject = get(slot, 'item.session', {});
  const programTitle = get(sessionObject, 'title.nb', null);
  const programScene = get(sessionObject, 'scene.title.nb', null);
  const programObject = get(sessionObject, 'foredragsholdere', []);
  const programImage = get(programObject[0], 'image', null);
  const userName = get(programObject[0], 'title.nb', null);
  const userSlug = get(programObject[0], 'slug.nb.current', null);
  const employer = get(programObject[0], 'employer.nb', null);
  const uid = get(programObject[0], '_id', null);

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
        <TouchableOpacity style={styles.star} onPress={() => toggleFavorite(slot.item._key)}>
          <Star checked={isFavorite(slot.item._key)} />
        </TouchableOpacity>
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
              {userName && employer && (
                <Text style={[styles.userName, styles.userNameFont]}>{`${userName} - ${employer}`}</Text>
              )}
              {programScene && <Text style={styles.userNameFont}>{programScene}</Text>}
            </React.Fragment>
          </TouchableHighlight>
        ) : (
          <React.Fragment>
            {programTitle && (
              <Text style={[styles.titleFont, styles.titleFontProperties]}>{programTitle.toUpperCase()}</Text>
            )}
            {userName && employer && (
              <Text style={[styles.userName, styles.userNameFont]}>{`${userName} - ${employer}`}</Text>
            )}
            {programScene && <Text style={styles.userNameFont}>{programScene}</Text>}
          </React.Fragment>
        )}
      </View>
    </View>
  );
};

export default ProgramSlot;

ProgramSlot.defaultProps = {
  slot: {},
  isFavorite: f => f,
  toggleFavorite: f => f,
};

ProgramSlot.propTypes = {
  onSelect: propTypes.func.isRequired,
  slot: propTypes.shape(),
  isFavorite: propTypes.func,
  toggleFavorite: propTypes.func,
};
