import { combineReducers } from 'redux';

// Import reducers
import speakersRead from './SpeakersReducer';
import speakerExtraRead from './SpeakerReducer';
import speakerWorkshopRead from './SpeakerWorkshopReducer';
import speakerTalkRead from './SpeakerTalkReducer';
import sponsorsRead from './SponsorsReducer';
import favorites from './Favorites';
import aboutArticleRead from './AboutReducer';
import programRead from './ProgramReducer';

const appReducer = combineReducers({
  speakersRead,
  speakerExtraRead,
  speakerWorkshopRead,
  speakerTalkRead,
  sponsorsRead,
  favorites,
  aboutArticleRead,
  programRead,
});

// eslint-disable-next-line no-undef
export default (rootReducer = (state, action) => {
  return appReducer(state, action);
});
