/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { View, TouchableHighlight, Text, Image } from 'react-native';
import propTypes from 'prop-types';
import { get } from 'lodash';
import convertUnicode from '../../../utils/unicodeChars';
import styles from './styles';

export default class SpeakerList extends React.Component {
  render() {
    const { speakers } = this.props;
    const { _id, title, position, image, employer, slug } = speakers.item;

    // Check that all speakerdata is in order.
    const speakerTitle = get(title, 'nb', '');
    const speakerPosition = get(position, 'nb', '');
    const speakerImage = typeof image === 'string' ? `${image}?w=236` : null;
    const speakerEmployer = get(employer, 'nb', '');
    const speakerSlug = get(slug, 'nb.current', '');

    const speakerData = {
      title: speakerTitle,
      position: speakerPosition,
      employer: speakerEmployer,
      image: speakerImage,
      slug: speakerSlug,
      uid: _id,
    };

    return (
      <TouchableHighlight underlayColor="transparent" onPress={() => this.props.onSelect(speakerData)}>
        <View style={styles.listWrapper}>
          <View style={styles.imageWrapper}>
            {speakerImage && <Image style={styles.image} source={{ uri: speakerImage }} resizeMode="cover" />}
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
  speakers: {},
  onSelect: () => {},
};

SpeakerList.propTypes = {
  onSelect: propTypes.func,
  speakers: propTypes.any,
};
