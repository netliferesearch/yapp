import actionType from '../utils/redux';

export function leaderboardFetched(state = {}, action) {

	switch(action.type) {
		case actionType.leaderboardFetched:
			return { ...state, leaderBoard: action.payload };
		case actionType.leaderboardRejected:
			return { ...state, leaderBoard: action.error };
		default:
			return state;
	}

	return state;
}
