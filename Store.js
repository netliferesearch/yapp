import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import ExpoFileSystemStorage from 'redux-persist-expo-filesystem';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import rootReducer from './src/reducers';

// WHITELIST
const persistConfig = {
  key: 'root',
  storage: ExpoFileSystemStorage,
  whitelist: ['favorites'], // only favorites will be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(promise, thunk);

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);
