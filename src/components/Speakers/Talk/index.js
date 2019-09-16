/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { View, Text, Image } from 'react-native';
import propTypes from 'prop-types';
import apiToValueChecker from '../../../utils/apiToValue';
import Card from '../../Card';
import SanityBlockContent from '../../SanityBlockContent';

import styles from './styles';

const Talk = props => {
  const { navigation, type, speakerExtra, speakerWorkshop, speakerTalk } = props;

  const talkName = type === 'talk' ? navigation.getParam('talkName', null) : navigation.getParam('workshopName', null);

  let talkDescription =
    type === 'talk' ? navigation.getParam('talkDescription', null) : navigation.getParam('workshopDescription', null);
  let userAbout = navigation.getParam('userAbout', null);

  // Props can be left out in navigation props.
  // Todo: Check if we can skip navigation props and go for speakerExtra, speakerWorkshop and speakerTalk.
  if (!talkDescription) {
    talkDescription = apiToValueChecker(speakerTalk, 'description') ? speakerTalk.description : null;
  }

  if (!userAbout) {
    userAbout = apiToValueChecker(speakerExtra, 'about', 'nb') ? speakerExtra.about.nb : null;
  }

  const userImage = navigation.getParam('userImage', null);

  let userName = navigation.getParam('userName', null);
  let userPosition = navigation.getParam('userPosition', null);
  let userEmployer = navigation.getParam('userEmployer', null);

  if (!userName) {
    userName = apiToValueChecker(speakerExtra, 'title', 'nb') ? speakerExtra.title.nb : null;
  }

  if (!userPosition) {
    userPosition = apiToValueChecker(speakerExtra, 'position', 'nb') ? speakerExtra.position.nb : null;
  }

  if (!userEmployer) {
    userEmployer = apiToValueChecker(speakerExtra, 'employer', 'nb') ? speakerExtra.employer.nb : null;
  }

  return (
    <React.Fragment>
      {talkName && (
        <View style={styles.content}>
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
      )}
      <View style={styles.content}>
        {talkDescription &&
          typeof talkDescription === 'object' &&
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
