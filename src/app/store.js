import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {DataHarianApi} from '../redux/api/getDataHarian.api';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  [DataHarianApi.reducerPath]: DataHarianApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(DataHarianApi.middleware),
});

setupListeners(store.dispatch);
