import actionType from '../utils/redux';

export default function myProgramsRead(state = {}, action) {
  switch (action.type) {
    case actionType.myProgramsReadFulfilled:
      return { ...state, programs: action.payload };
    case actionType.myProgramsReadRejected:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
