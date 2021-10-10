import { configureStore } from '@reduxjs/toolkit';
import mobileNavReducer from '../redux/mobileNavSlice';

export const store = configureStore({
  reducer: {
    mobileNav: mobileNavReducer,
  },
});
