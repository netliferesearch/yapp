import actionType from '../utils/redux';

export function fetchLeaderboard() {

	return dispatch => {
    dispatch({
      type: actionType.leaderboardFetched,
      payload: 'Leaderboard fetched...'
    });
	}
}
