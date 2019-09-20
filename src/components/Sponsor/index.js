import React from 'react';
import { TouchableHighlight, View, Image, Linking } from 'react-native';
import propTypes from 'prop-types';
import { get } from 'lodash';
import styles from './styles';

const Sponsor = props => {
  const { sponsor, partnerLevel } = props;
  const image = get(sponsor, 'sponsor.image', null);
  const link = get(sponsor, 'sponsor.link', null);
  const title = get(sponsor, 'sponsor.title.nb', null);
  const level = get(sponsor, 'level', null);

  return (
    <View>
      {image && level === partnerLevel && (
        <TouchableHighlight underlayColor="transparent" onPress={() => Linking.openURL(link)}>
          <View>
            <Image
              accessibilityLabel={title}
              style={[
                level === 'superpartner' && styles.superpartner,
                level === 'mainpartner' && styles.mainpartner,
                level === 'partner' && styles.partner,
              ]}
              source={{ uri: image }}
              resizeMode="contain"
            />
          </View>
        </TouchableHighlight>
      )}
    </View>
  );
};

export default Sponsor;

Sponsor.propTypes = {
  sponsor: propTypes.shape().isRequired,
  partnerLevel: propTypes.string.isRequired,
};
