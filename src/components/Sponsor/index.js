import React from 'react';
import { TouchableHighlight, View, Image, Linking } from 'react-native';
import propTypes from 'prop-types';
import apiToValueChecker from '../../utils/apiToValue';
import styles from './styles';

const Sponsor = props => {
  const { sponsor, partnerLevel } = props;
  const image = apiToValueChecker(sponsor, 'sponsor', 'image') ? sponsor.sponsor.image : null;
  const link = apiToValueChecker(sponsor, 'sponsor', 'link') ? sponsor.sponsor.link : null;
  const title = apiToValueChecker(sponsor, 'sponsor', 'title', 'nb') ? sponsor.sponsor.title.nb : null;
  const level = apiToValueChecker(sponsor, 'level') ? sponsor.level : null;

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
