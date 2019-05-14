import { combineReducers } from 'redux';

// Import reducers
import { card, userSignedUp, userLoggedIn } from './UserReducer';

const appReducer = combineReducers({
  card,
  userSignedUp,
  userLoggedIn,
});

// eslint-disable-next-line no-undef
export default (rootReducer = (state, action) => {
  return appReducer(state, action);
});
