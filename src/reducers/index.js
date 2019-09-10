import { combineReducers } from 'redux';

// Import reducers
import speakersRead from './SpeakersReducer';
import speakerExtraRead from './SpeakerReducer';

const appReducer = combineReducers({
  speakersRead,
  speakerExtraRead,
});

// eslint-disable-next-line no-undef
export default rootReducer = (state, action) => {
  return appReducer(state, action);
};
