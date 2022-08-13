import { createAsyncThunk } from '@reduxjs/toolkit';
import shopApi from './shopApi';

export const getAllProducts = createAsyncThunk('/products', async () => {
  const response = await shopApi({ url: '/products', method: 'GET' });
  return response.data;
});

export const getSingleProduct = createAsyncThunk(
  '/product/{id}',
  async ({ id = 1 }) => {
    const response = await shopApi({ url: `/products/${id}`, method: 'GET' });
    return response.data;
  }
);

export const getCartItems = createAsyncThunk('/carts', async () => {
  const response = await shopApi({ url: '/carts', method: 'GET' });
  return response.data;
});
