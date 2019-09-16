import { get, omit } from 'lodash';
import actionType from '../utils/redux';

export default function favoritesRead(state = {}, action) {
  switch (action.type) {
    case actionType.toggleFavorite:
      return {
        ...state,
        favorites: get(state, ['favorites', action.payload], false) // if the id is a favorite
          ? omit(get(state, 'favorites'), action.payload) // remove it from the collection
          : { ...get(state, 'favorites', {}), [action.payload]: true }, // otherwise add it
      };
    default:
      return state;
  }
}
