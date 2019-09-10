/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { View, TouchableHighlight, Text, Image } from 'react-native';
import propTypes from 'prop-types';
import convertUnicode from '../../../utils/unicodeChars';
import styles from './styles';

export default class SpeakerList extends React.Component {
  render() {
    const { speakers } = this.props;
    const { title, position, image, employer, slug } = speakers.item;
    // Check that all speakerdata is in order.
    // Todo: Create a data checker helper function to utility.
    const speakerTitle = typeof title === 'object' && typeof title.nb !== 'undefined' ? title.nb : '';
    const speakerPosition = typeof position === 'object' && typeof position.nb !== 'undefined' ? position.nb : '';
    const speakerImage = typeof image === 'string' ? image : '';
    const speakerEmployer = typeof employer === 'object' && typeof employer.nb !== 'undefined' ? employer.nb : '';
    const speakerSlug =
      typeof slug === 'object' && typeof slug.nb !== 'undefined' && typeof slug.nb.current !== 'undefined'
        ? slug.nb.current
        : '';

    const speakerData = {
      title: speakerTitle,
      position: speakerPosition,
      employer: speakerEmployer,
      image: speakerImage,
      slug: speakerSlug,
    };

    return (
      <TouchableHighlight underlayColor="transparent" onPress={() => this.props.onSelect(speakerData)}>
        <View style={styles.listWrapper}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={{ uri: speakerImage }} resizeMode="cover" />
          </View>
          <View style={styles.textWrapper}>
            <View style={styles.textTopWrapper}>
              <Text style={[styles.titleFont, styles.title]}>{speakerTitle}</Text>
              <Text style={[styles.titleFont, styles.arrow]}>{convertUnicode('\u2192')}</Text>
            </View>
            <Text style={styles.textFont}>{`${speakerPosition} at ${speakerEmployer}`}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

SpeakerList.defaultProps = {
  speakers: null,
  onSelect: () => {},
};

SpeakerList.propTypes = {
  onSelect: propTypes.func,
  speakers: propTypes.shape(),
};