import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  account: {},
  isFetching: false,
};
const applicationSlice = createSlice({
  name: 'application data',
  initialState,
  reducers: {
    account: (state, { payload }) => {
      state.account = { ...state?.account, ...payload };
    },
    resetAccount: (state) => {
      state.account = initialState?.account;
    },
    isFetching: (state, { payload }) => {
      state.isFetching = { ...state?.isFetching, ...payload };
    },
  },
});

export default applicationSlice.reducer;

export const { account, resetAccount, isFetching } = applicationSlice.actions;
