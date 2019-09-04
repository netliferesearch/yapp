import actionType from '../utils/redux';

export default function speakersRead(state = {}, action) {
  switch (action.type) {
    case actionType.speakersReadFulfilled:
      return { ...state, speakers: action.payload };
    case actionType.speakersReadRejected:
      return { ...state, speakers: action.error };
    default:
      return state;
  }
}
