import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { get } from 'lodash';

// Props and Redux
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleFavorite } from '../../actions/FavoritesAction';

// Components
import Header from '../../components/Header';
import Program from '../../components/Program';

// Others
import convertUnicode from '../../utils/unicodeChars';
import styles from './styles';

export class ProgramScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  isFavorite = id => get(this.props, ['favorites', id])

  render() {
    return (
      <View style={styles.screenWrapper}>
        <Header {...this.props} />
        <ScrollView>
          <View style={styles.screenInnerWrapper}>
            <View style={styles.intro}>
              <Text style={styles.introHead}>{this.props.title}</Text>
              <Text style={styles.introArrow}>
                {`${convertUnicode('\u2193')} ${convertUnicode('\u2193')} ${convertUnicode('\u2193')}`}
              </Text>
            </View>
            <Program
              {...this.props}
              isFavorite={this.isFavorite}
              toggleFavorite={this.props.toggleFavorite}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { speakersRead, programRead, speakerWorkshopRead, speakerTalkRead, speakerExtraRead, favoritesRead } = state;

  return {
    speakers: speakersRead.speakers,
    program: programRead.program,
    speakerExtra: speakerExtraRead.speaker,
    speakerWorkshop: speakerWorkshopRead.workshop,
    speakerTalk: speakerTalkRead.talk,
    favorites: favoritesRead.favorites,
  };
};

export default connect(
  mapStateToProps,
  { toggleFavorite },
)(ProgramScreen);

ProgramScreen.defaultProps = {
  title: 'PROGRAM',
  program: {},
  favorites: {},
  slotFilter: f => f,
};

ProgramScreen.propTypes = {
  title: propTypes.string,
  program: propTypes.oneOfType([propTypes.shape(), propTypes.array]),
  favorites: propTypes.object.isRequired,
  toggleFavorite: propTypes.func.isRequired,
  slotFilter: propTypes.func,
};
