import React from 'react';
import { View, Text, Image } from 'react-native';
import propTypes from 'prop-types';
import { get } from 'lodash';
import Card from '../../Card';
import SanityBlockContent from '../../SanityBlockContent';

import styles from './styles';

const Talk = props => {
  const { navigation, type, speakerExtra, speakerTalk, speakerWorkshop } = props;

  const userImage = navigation.getParam('userImage', null);

  let talkName = null;
  let talkDescription = null;
  const userName = get(speakerExtra, 'title.nb', null);
  const userPosition = get(speakerExtra, 'position.nb', null);
  const userEmployer = get(speakerExtra, 'employer.nb', null);
  const userAbout = get(speakerExtra, 'about.nb', null);

  if (type === 'talk') {
    talkName = get(speakerTalk, 'title.nb', null);
    talkDescription = get(speakerTalk, 'description', null);
  } else {
    talkName = get(speakerWorkshop, 'title.nb', null);
    talkDescription = get(speakerWorkshop, 'description', null);
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
            <Image style={styles.heroImage} source={{ uri: userImage }} resizeMode="contain" />
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
  speakerWorkshop: {},
};

Talk.propTypes = {
  type: propTypes.string.isRequired,
  speakerExtra: propTypes.shape(),
  speakerTalk: propTypes.shape(),
  speakerWorkshop: propTypes.shape(),
  navigation: propTypes.shape().isRequired,
};
