import actionTypes from '../utils/redux';

export function toggleFavorite(id) {
  return {
    type: actionTypes.toggleFavorite,
    payload: id,
  };
}
