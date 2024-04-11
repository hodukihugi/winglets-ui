import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from "redux-persist";
import authReducer from "./slices/auth.slice";
import commonReducer from "./slices/common.slice";
import {authApi} from "./apis/auth.api";
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/query';
const loggerMiddleware = store => next => action => {
  // console.log('Dispatching:', action);
  const result = next(action);
  // console.log('Next state:', store.getState());
  return result;
};
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  common: commonReducer,
  [authApi.reducerPath]: authApi.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
          .concat(loggerMiddleware)
          .concat(authApi.middleware)
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);