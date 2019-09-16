import { connect } from 'react-redux';
import { get } from 'lodash';
import { toggleFavorite } from '../../actions/FavoritesAction';

// Others
import { ProgramScreen } from '../ProgramScreen';

const mapStateToProps = state => {
  const { speakersRead, programRead, favorites } = state;

  return {
    speakers: speakersRead.speakers,
    favorites: favorites.favorites,
    title: 'MY PROGRAM',
    slotFilter: function slotFilter({ _key: key }) {
      return get(favorites, ['favorites', key], false);
    },
    program: programRead.program,
  };
};

export default connect(
  mapStateToProps,
  { toggleFavorite },
)(ProgramScreen);
