const errorMsg = (name = '', errorCode = '', errorMessage = '') => {
  return `Error on ${name}. ${errorCode !== '' && ' Code: ' + errorCode + '. '}Message: ${errorMessage}`;
}

export default errorMsg;
