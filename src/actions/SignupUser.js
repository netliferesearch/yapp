import actionType from '../utils/redux';
import errorMsg from '../utils/errorMsg';

/**
 * @param {string} badgeId 
 */
const fetchUserdataByNfcId = (badgeId = null) => {

	return dispatch => {

    if(badgeId) {
      // Fetch userdata by NFC id.
    } else {

    }
	}
}
/**
 * @param {string} badgeId 
 */
const signupUser = (badgeId = null) => {

	return dispatch => {

    if(badgeId) {

      firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => {

          const { errorCode, errorMessage } = error;

          dispatch({
            type: actionType.doSignupRejected,
            error: errorMsg('signup', errorCode, errorMessage)
          });
        })
        .then(() => {
          // Step 2. Bind badge id with user and update user node.
          dispatch({
            type: actionType.doSignupFulfilled,
            payload: true
          });
        });
      
    } else {

      dispatch({
        type: actionType.doSignupRejected,
        error: errorMsg('signup', null, 'Missing badge ID.')
      });
    }
	}
}

export default signupUser;
