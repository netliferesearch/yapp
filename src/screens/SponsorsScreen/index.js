/* eslint-disable class-methods-use-this */
import React from 'react';
import { ScrollView, View, Text } from 'react-native';
// Props and Redux
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import readSponsors from '../../actions/SponsorsAction';
// Components
import Header from '../../components/Header';
import Sponsor from '../../components/Sponsor';
// Others

import styles from './styles';

export class SponsorsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      superPartners: [],
      mainPartners: [],
      partners: [],
    };
  }

  componentDidMount() {
    this.props.readSponsors();
  }

  static getDerivedStateFromProps(props, state) {
    const { sponsors } = props;
    const { superPartners, mainPartners, partners } = state;

    if (superPartners.length === 0 || mainPartners.length === 0 || partners.length === 0) {
      const sp = [];
      const mp = [];
      const p = [];

      Object.keys(sponsors).map(sponsorType => {
        switch (sponsorType) {
          case 'mainPartners':
            mp.push(sponsors[sponsorType]);
            break;
          case 'partners':
            p.push(sponsors[sponsorType]);
            break;
          case 'superPartners':
            sp.push(sponsors[sponsorType]);
            break;
          default:
            break;
        }
      });
      return {
        superPartners: sp,
        mainPartners: mp,
        partners: p,
      };
    }
    return null;
  }

  renderSponsors(partners, partnerLevel, i) {
    return Object.keys(partners).map(sponsor => (
      <Sponsor key={`partner-${partnerLevel}-${i}${sponsor}`} sponsor={partners[sponsor]} partnerLevel={partnerLevel} />
    ));
  }

  render() {
    const { superPartners, mainPartners, partners } = this.state;
    return (
      <View style={styles.screenWrapper}>
        <Header {...this.props} />
        <ScrollView style={styles.screenInnerWrapper}>
          <View style={styles.partnersContainer}>
            <Text style={[styles.sponsorFont, styles.sponsorFontProperties]}>SUPER PARTNER</Text>
            {Object.keys(superPartners).map(i => this.renderSponsors(superPartners[i], 'superpartner', i))}
          </View>
          <View style={styles.partnersContainer}>
            <Text style={[styles.sponsorFont, styles.sponsorFontProperties]}>MAIN PARTNERS</Text>
            {Object.keys(mainPartners).map(i => this.renderSponsors(mainPartners[i], 'mainpartner', i))}
          </View>
          <View style={styles.partnersContainer}>
            <Text style={[styles.sponsorFont, styles.sponsorFontProperties]}>PARTNERS</Text>
            {Object.keys(partners).map(i => this.renderSponsors(partners[i], 'partner', i))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { sponsorsRead } = state;
  return {
    sponsors: sponsorsRead.sponsors,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      readSponsors,
    },
    dispatch,
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SponsorsScreen);

SponsorsScreen.defaultProps = {
  sponsors: {},
};

SponsorsScreen.propTypes = {
  sponsors: propTypes.shape(),
  readSponsors: propTypes.func.isRequired,
};
