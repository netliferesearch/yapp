import { connect } from 'react-redux';
import { get } from 'lodash';
import { toggleFavorite } from '../../actions/FavoritesAction';

// Others
import { ProgramScreen } from '../ProgramScreen';

const mapStateToProps = state => {
  const { speakersRead, programRead, favoritesRead } = state;

  return {
    speakers: speakersRead.speakers,
    favorites: favoritesRead.favorites,
    title: 'MY PROGRAM',
    slotFilter: function slotFilter({ _key: key }) {
      return get(favoritesRead, ['favorites', key], false);
    },
    program: programRead.program,
  };
};

export default connect(
  mapStateToProps,
  { toggleFavorite },
)(ProgramScreen);
