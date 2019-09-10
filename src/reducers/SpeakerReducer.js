import actionType from '../utils/redux';

export default function speakerExtraRead(state = {}, action) {
  switch (action.type) {
    case actionType.speakerReadFulfilled:
      return { ...state, speaker: action.payload };
    case actionType.speakerReadRejected:
      return { ...state, speaker: action.error };
    default:
      return state;
  }
}
