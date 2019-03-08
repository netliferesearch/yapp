import { combineReducers } from 'redux';

// Import reducers
import { card, userSignedUp } from './UserReducer';

const appReducer = combineReducers({
	card,
	userSignedUp,
});

export default rootReducer = (state, action) => {
	return appReducer(state, action);
}
