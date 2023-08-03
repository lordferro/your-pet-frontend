import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAddToFavorite,
  fetchFavoriteNotices,
  fetchNotices,
  fetchRemoveFromFavorite,
  fetchUserNotices,
} from './operations';
import { logIn, logOut, refreshUser, register } from 'redux/auth/operation';

const initialState = {
  items: [],
  favorite: [],
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
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.favorite = action.payload.favoritePets;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.favorite = action.payload.favoritePets;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.favorite = action.payload.favoritePets;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.favorite = [];
      })
      .addCase(fetchNotices.pending, state => {
        handlePending(state);
      })
      .addCase(fetchNotices.fulfilled, (state, action) => {
        handleFulfilled(state, action);
      })
      .addCase(fetchNotices.rejected, (state, action) => {
        handleRejected(state, action);
      })
      .addCase(fetchUserNotices.pending, state => {
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
        handlePending(state);
      })
      .addCase(fetchFavoriteNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchFavoriteNotices.rejected, (state, action) => {
        handleRejected(state, action);
      })

      .addCase(fetchAddToFavorite.fulfilled, (state, { payload }) => {
        state.favorite.push(payload);
      })

      .addCase(fetchRemoveFromFavorite.fulfilled, (state, { payload }) => {
        const index = state.favorite.findIndex(item => item === payload);
        state.favorite.splice(index, 1);
      });
  },
});

export const noticesReducer = noticesSlice.reducer;
