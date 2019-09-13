import actionType from '../utils/redux';

export default function sponsorsRead(state = {}, action) {
  switch (action.type) {
    case actionType.sponsorsReadFulfilled:
      return { ...state, sponsors: action.payload };
    case actionType.sponsorsReadRejected:
      return { ...state, sponsors: action.error };
    default:
      return state;
  }
}
