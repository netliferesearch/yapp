import { combineReducers } from 'redux';

// Import reducers
import { leaderboardFetched } from './LeaderboardReducer';

const appReducer = combineReducers({
	leaderboardFetched,
});

export default rootReducer = (state, action) => {
	return appReducer(state, action);
}
