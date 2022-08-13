import { createSlice } from '@reduxjs/toolkit';
import { getAllProducts, getSingleProduct } from '../services/shopServiceCalls';

const initialState = {
  products: [],
  singleProduct: {},
  isFetching: false,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.isFetching = true;
    },
    [getAllProducts.fulfilled]: (state, { payload }) => {
      state.products = [...state.products, ...payload];
      state.isFetching = false;
    },
    [getSingleProduct.fulfilled]: (state, { payload }) => {
      state.singleProduct = { ...state.singleProduct, ...payload };
    },
  },
});

export default shopSlice.reducer;
