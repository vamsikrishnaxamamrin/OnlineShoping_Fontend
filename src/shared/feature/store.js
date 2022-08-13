import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './shopSlice';
import appReducer from './applicationSlice';

const store = configureStore({
  reducer: {
    shop: shopReducer,
    appData: appReducer,
  },
});

export default store;
