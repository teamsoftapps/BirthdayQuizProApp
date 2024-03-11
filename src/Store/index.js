import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {MMKV} from 'react-native-mmkv';
import {thunk} from 'redux-thunk';

const mmkvStorage = {
  getItem: async key => MMKV.getStringAsync(key),
  setItem: async (key, value) => MMKV.setStringAsync(key, value),
  removeItem: async key => MMKV.removeItem(key),
};

const persistConfig = {
  key: 'root',
  storage: mmkvStorage,
  blacklist: [],
};

const rootReducer = (state, action) => {
  return allreducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});

export const persistor = persistStore(Store);
