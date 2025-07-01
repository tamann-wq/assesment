import { configureStore } from '@reduxjs/toolkit';
import productReducer from './SliceProducts';

export const store = configureStore({
  reducer: {
    products: productReducer
  }
});