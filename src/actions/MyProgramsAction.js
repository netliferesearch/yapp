import { YellowBox, AsyncStorage } from 'react-native';
import actionType from '../utils/redux';

YellowBox.ignoreWarnings(['Setting a timer']);

function readMyPrograms() {
  return dispatch => {
    // eslint-disable-next-line no-new
    new Promise((resolve, reject) => {
      AsyncStorage.getItem('myYPrograms')
        .then(myPrograms => {
          if (myPrograms) {
            resolve();
            dispatch({
              type: actionType.myProgramsReadFulfilled,
              payload: JSON.parse(myPrograms),
            });
          } else {
            resolve();
            dispatch({
              type: actionType.myProgramsReadFulfilled,
              payload: null,
            });
          }
        })
        .catch(err => reject(err));
    });
  };
}

function updateMyPrograms(programs) {
  return dispatch => {
    const storeProgram = async () => {
      try {
        const storagePrograms = await AsyncStorage.setItem('myYPrograms', JSON.stringify(programs));
        dispatch({
          type: actionType.myProgramsReadFulfilled,
          payload: storagePrograms,
        });
      } catch (err) {
        dispatch({
          type: actionType.myProgramsReadRejected,
          error: `Error. Could not set my programs. ${err}`,
        });
      }
    };
    storeProgram();
  };
}

export { readMyPrograms, updateMyPrograms };
