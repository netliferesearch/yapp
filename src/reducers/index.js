import { combineReducers } from 'redux';

// Import reducers
import speakersRead from './SpeakersReducer';
import speakerExtraRead from './SpeakerReducer';
import speakerWorkshopRead from './SpeakerWorkshopReducer';
import speakerTalkRead from './SpeakerTalkReducer';

const appReducer = combineReducers({
  speakersRead,
  speakerExtraRead,
  speakerWorkshopRead,
  speakerTalkRead,
});

// eslint-disable-next-line no-undef
export default rootReducer = (state, action) => {
  return appReducer(state, action);
};
