import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {DataHarianApi} from '../redux/api/getDataHarian.api';
import {combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import languageReducer from '../redux/feature/languageSlice.redux';

const rootReducer = combineReducers({
  language: persistReducer(
    {
      key: 'language',
      storage: AsyncStorage,
    },
    languageReducer,
  ),

  [DataHarianApi.reducerPath]: DataHarianApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(DataHarianApi.middleware),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
