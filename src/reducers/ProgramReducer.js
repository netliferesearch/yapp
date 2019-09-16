import actionType from '../utils/redux';

export default function programRead(state = {}, action) {
  switch (action.type) {
    case actionType.programReadFulfilled:
      return { ...state, program: action.payload };
    case actionType.programReadRejected:
      return { ...state, program: action.error };
    default:
      return state;
  }
}
