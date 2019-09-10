import actionType from '../utils/redux';

export default function speakerWorkshopRead(state = {}, action) {
  switch (action.type) {
    case actionType.speakerReadWorkshopFulfilled:
      return { ...state, workshop: action.payload };
    case actionType.speakerWorkshopReadRejected:
      return { ...state, workshop: action.error };
    default:
      return state;
  }
}
