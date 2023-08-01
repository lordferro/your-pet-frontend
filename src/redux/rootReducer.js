import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/slice';
import { noticesReducer } from './notices/slice';
import { filtersReducer } from './categoryFilter/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  notices: noticesReducer,
  filters: filtersReducer,
});
