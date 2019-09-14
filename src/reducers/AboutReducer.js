import actionType from '../utils/redux';

export default function aboutArticleRead(state = {}, action) {
  switch (action.type) {
    case actionType.aboutArticleReadFulfilled:
      return { ...state, article: action.payload };
    case actionType.aboutArticleReadRejected:
      return { ...state, article: action.error };
    default:
      return state;
  }
}
