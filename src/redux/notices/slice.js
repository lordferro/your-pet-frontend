import { createSlice } from '@reduxjs/toolkit';
import {
  fetchFavoriteNotices,
  fetchNotices,
  fetchUserNotices,
} from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.items = action.payload;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNotices.pending, state => {
        state.items = [];
        handlePending(state);
      })
      .addCase(fetchNotices.fulfilled, (state, action) => {
        handleFulfilled(state, action);
      })
      .addCase(fetchNotices.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(fetchUserNotices.pending, state => {
        state.items = [];
        handlePending(state);
      })
      .addCase(fetchUserNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchUserNotices.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(fetchFavoriteNotices.pending, state => {
        state.items = [];
        handlePending(state);
      })
      .addCase(fetchFavoriteNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchFavoriteNotices.rejected, (state, action) => {
        handleRejected(state, action);
      });
  },
});

export const noticesReducer = noticesSlice.reducer;
