import { get } from 'lodash';
import actionType from '../utils/redux';

export default function favoritesRead(state = {}, action) {
  switch (action.type) {
    case actionType.toggleFavorite:
      return {
        ...state,
        favorites: {
          ...(state.favorites || {}),
          [action.payload]: !get(state, ['favorites', action.payload], false),
        },
      };
    default:
      return state;
  }
}
