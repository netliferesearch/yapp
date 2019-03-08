import actionType from '../utils/redux';

export const card = (state = {}, action) => {
	switch(action.type) {
		case actionType.cardIdFetched:
			return { ...state, id: action.payload };
		case actionType.cardIdRejected:
			return { ...state, id: action.error };
		default:
			return state;
	}
}

export const userSignedUp = (state = {}, action) => {
	switch(action.type) {
		case actionType.doSignupFulfilled:
			return { ...state, user: action.payload };
		case actionType.doSignupRejected:
			return { ...state, user: action.error };
		default:
			return state;
	}
}