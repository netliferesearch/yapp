import React from 'react';
import { ScrollView, View, Text } from 'react-native';
// Redux and props
import propTypes from 'prop-types';
import { get } from 'lodash';
import { connect } from 'react-redux';
import readProgram from '../../actions/ProgramAction';
import readSpeakers from '../../actions/SpeakersAction';
import { toggleFavorite } from '../../actions/FavoritesAction';
// Components
import Header from '../../components/Header';
import Hero from '../../components/Card/Hero';
import Program from '../../components/Program';
// Other
import convertUnicode from '../../utils/unicodeChars';
import styles from './styles';
import { screen } from '../../styles/theme';

export class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // Fetch speakers and program
    this.props.readProgram();
    this.props.readSpeakers();
  }

  isFavorite = id => get(this.props, ['favorites', id]);

  render() {
    return (
      <View style={screen.wrapper}>
        <Header {...this.props} infoText />
        <ScrollView>
          <Hero />
          <View style={screen.innerWrapper}>
            <View style={styles.intro}>
              <Text style={styles.introHead}>PROGRAM</Text>
              <Text style={styles.introArrow}>
                {`${convertUnicode('\u2193')} ${convertUnicode('\u2193')} ${convertUnicode('\u2193')}`}
              </Text>
            </View>

            <Program {...this.props} isFavorite={this.isFavorite} toggleFavorite={this.props.toggleFavorite} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => {
  const { speakersRead, programRead, favoritesRead } = state;

  return {
    speakers: speakersRead.speakers,
    program: programRead.program,
    favorites: favoritesRead.favorites,
  };
};

export default connect(
  mapStateToProps,
  {
    readProgram,
    readSpeakers,
    toggleFavorite,
  },
)(MainScreen);

MainScreen.defaultProps = {
  program: [],
  speakers: [],
  favorites: {},
};

MainScreen.propTypes = {
  program: propTypes.array,
  speakers: propTypes.array,
  favorites: propTypes.object,
  readProgram: propTypes.func.isRequired,
  readSpeakers: propTypes.func.isRequired,
  toggleFavorite: propTypes.func.isRequired,
};
