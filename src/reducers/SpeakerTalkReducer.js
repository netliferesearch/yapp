import actionType from '../utils/redux';

export default function speakerTalkRead(state = {}, action) {
  switch (action.type) {
    case actionType.speakerReadTalkFulfilled:
      return { ...state, talk: action.payload };
    case actionType.speakerReadTalkRejected:
      return { ...state, talk: action.error };
    default:
      return state;
  }
}
