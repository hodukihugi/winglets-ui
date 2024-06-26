import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from "redux-persist";
import authReducer from "./slices/auth.slice";
import registerReducer from "./slices/register.slice";
import profileReducer from "./slices/profile.slice";
import commonReducer from "./slices/common.slice";
import {authApi} from "./apis/auth.api";
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/query';
import {profileApi} from "./apis/profile.api";
import {recommendationApi} from "./apis/recommendation.api";
const loggerMiddleware = store => next => action => {
  console.log('Dispatching:', action);
  const result = next(action);
  console.log('Next state:', store.getState());
  return result;
};
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth','profile'],

};

const rootReducer = combineReducers({
  auth: authReducer,
  register: registerReducer,
  profile: profileReducer,
  common: commonReducer,
  [authApi.reducerPath]: authApi.reducer,
  [profileApi.reducerPath]: profileApi.reducer,
  [recommendationApi.reducerPath]: recommendationApi.reducer,
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
          .concat(profileApi.middleware)
          .concat(recommendationApi.middleware)
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);