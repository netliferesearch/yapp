/* eslint-disable no-underscore-dangle */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { View, Text, Image } from 'react-native';
import propTypes from 'prop-types';

import Card from '../../Card';
import SanityBlockContent from '../../SanityBlockContent';

import styles from './styles';

const Talk = props => {
  const { navigation, type } = props;
  const talkName = navigation.getParam('name', '');
  const talkDescription =
    type === 'talk' ? navigation.getParam('talkDescription', '') : navigation.getParam('workshopDescription', '');
  const userImage = navigation.getParam('userImage', '');
  const userName = navigation.getParam('userName', '');
  const userPosition = navigation.getParam('userPosition', '');
  const userEmployer = navigation.getParam('userEmployer', '');
  const userAbout = navigation.getParam('userAbout', '');
  return (
    <React.Fragment>
      <View style={styles.content}>
        <Card
          text={talkName
            .split(' ')
            .join('\n')
            .toUpperCase()}
          align="left"
          isTwoThirds
        />
      </View>
      <View style={styles.content}>
        {typeof talkDescription === 'object' &&
          // eslint-disable-next-line react/no-array-index-key
          talkDescription.map((desc, i) => <SanityBlockContent key={`talkDesc-${i}`} blocks={desc.introArray.nb} />)}
      </View>
      <View style={styles.content}>
        {userImage && (
          <View style={styles.heroImageWrapper}>
            <Image style={styles.heroImage} source={{ uri: userImage }} resizeMode="cover" />
          </View>
        )}
        {userName && <Text style={[styles.userNameFont, styles.userNameProperties]}>{userName}</Text>}
        {userPosition && userEmployer && <Text style={styles.userTitle}>{`${userPosition} at\n${userEmployer}`}</Text>}
      </View>
      <View style={styles.content}>{userAbout && <SanityBlockContent blocks={userAbout} />}</View>
    </React.Fragment>
  );
};

export default Talk;

Talk.defaultProps = {};

Talk.propTypes = {
  type: propTypes.string.isRequired,
  navigation: propTypes.shape().isRequired,
};
