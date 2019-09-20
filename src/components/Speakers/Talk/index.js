import React from 'react';
import { View, Text, Image } from 'react-native';
import propTypes from 'prop-types';
import { get } from 'lodash';
import Card from '../../Card';
import SanityBlockContent from '../../SanityBlockContent';

import styles from './styles';

const Talk = props => {
  const { navigation, type, speakerExtra, speakerTalk } = props;

  const userImage = navigation.getParam('userImage', null);

  let talkName = null;
  let talkDescription = null;

  let userName = navigation.getParam('userName', null);
  let userPosition = navigation.getParam('userPosition', null);
  let userEmployer = navigation.getParam('userEmployer', null);
  let userAbout = navigation.getParam('userAbout', null);

  if (type === 'talk') {
    talkName = navigation.getParam('talkName', null);
    talkDescription = navigation.getParam('talkDescription', null);
  } else {
    talkName = navigation.getParam('workshopName', null);
    talkDescription = navigation.getParam('workshopDescription', null);
  }

  // Props can be left out in navigation props and might be set in props.
  // TODO: Could we skip navigation params and rely on redux props?
  if (!talkDescription) {
    talkDescription = get(speakerTalk, 'description', null);
  }

  if (!userAbout) {
    userAbout = get(speakerExtra, 'about.nb', null);
  }

  if (!userName) {
    userName = get(speakerExtra, 'title.nb', null);
  }

  if (!userPosition) {
    userPosition = get(speakerExtra, 'position.nb', null);
  }

  if (!userEmployer) {
    userEmployer = get(speakerExtra, 'position.nb', null);
  }

  return (
    <React.Fragment>
      {talkName && (
        <View style={styles.content}>
          <View style={{ flexDirection: 'row' }}>
            <Card
              text={talkName
                .split(' ')
                .join('\n')
                .toUpperCase()}
              options={{
                align: 'left',
                isTwoThirds: true,
              }}
            />
          </View>
        </View>
      )}
      <View style={styles.content}>
        {talkDescription &&
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

Talk.defaultProps = {
  speakerExtra: {},
  speakerTalk: {},
};

Talk.propTypes = {
  type: propTypes.string.isRequired,
  speakerExtra: propTypes.shape(),
  speakerTalk: propTypes.shape(),
  navigation: propTypes.shape().isRequired,
};
