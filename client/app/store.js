import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import AllArtworkSlice from '../features/artwork/AllArtworkSlice';
import singleArtworkSlice  from '../features/artwork/SingleArtworkSlice';
import authReducer from '../features/auth/authSlice';

const store = configureStore({
  reducer: { auth: authReducer, 
  gallery: AllArtworkSlice,
  artwork: singleArtworkSlice,},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from '../features/auth/authSlice';
