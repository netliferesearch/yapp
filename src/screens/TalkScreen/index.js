import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
// Props and Redux
import propTypes from 'prop-types';

// Others
import Header from '../../components/Header';
import Card from '../../components/Card';
import SanityBlockContent from '../../components/SanityBlockContent';
import styles from './styles';

export default class TalkScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    const talkName = navigation.getParam('name', '');
    const talkDescription = navigation.getParam('description', '');
    const userImage = navigation.getParam('userImage', '');
    const userName = navigation.getParam('userName', '');
    const userPosition = navigation.getParam('userPosition', '');
    const userEmployer = navigation.getParam('userEmployer', '');
    const userAbout = navigation.getParam('userAbout', '');
    // const talkSlug = navigation.getParam('slug', '');
    // const userSlug = navigation.getParam('userSlug', '');

    return (
      <ScrollView style={styles.screenWrapper}>
        <Header {...this.props} />
        <View style={styles.screenInnerWrapper}>
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
              talkDescription.map(desc => (
                <SanityBlockContent key={desc.introArray.nb[0]._key} blocks={desc.introArray.nb} />
              ))}
          </View>
          <View style={styles.content}>
            {userImage && (
              <View style={styles.heroImageWrapper}>
                <Image style={styles.heroImage} source={{ uri: userImage }} resizeMode="cover" />
              </View>
            )}
            {userName && <Text style={[styles.userNameFont, styles.userNameProperties]}>{userName}</Text>}
            {userPosition && userEmployer && (
              <Text style={styles.userTitle}>{`${userPosition} at\n${userEmployer}`}</Text>
            )}
          </View>
          <View style={styles.content}>{userAbout && <SanityBlockContent blocks={userAbout} />}</View>
        </View>
      </ScrollView>
    );
  }
}

TalkScreen.defaultProps = {};

TalkScreen.propTypes = {
  navigation: propTypes.shape().isRequired,
};
