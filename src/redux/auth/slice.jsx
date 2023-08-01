import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  logOut,
  refreshUser,
  register,
  getCurrentUser,
  updateUser,
} from './operation';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isUpdating: false,
    isGreetingShow: false,
    error: null,
  },
  reducers: {
    hideGreeting(state, action) {
      state.isGreetingShow = false;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isGreetingShow = true;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.error = payload;
        Notify.failure(payload);
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
        Notify.failure(action.payload);
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(updateUser.pending, (state, action) => {
        state.isUpdating = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isUpdating = false;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isUpdating = false;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
      })
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        state.error = payload;
      }),
});

export const { hideGreeting } = authSlice.actions;
export const authReducer = authSlice.reducer;
