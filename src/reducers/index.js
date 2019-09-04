import { combineReducers } from 'redux';

// Import reducers
import speakersRead from './SpeakersReducer';

const appReducer = combineReducers({
  speakersRead,
});

// eslint-disable-next-line no-undef
export default rootReducer = (state, action) => {
  return appReducer(state, action);
};
