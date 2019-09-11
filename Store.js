import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
// import { createLogger } from 'redux-logger';
import rootReducer from './src/reducers';

// const logger = createLogger();

const middleware = applyMiddleware(promise, thunk /*, logger */);
export default createStore(rootReducer, middleware);
