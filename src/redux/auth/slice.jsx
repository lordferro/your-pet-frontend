import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: true,
    isRefreshing: false,
  },
  extraReducers: {},
});

export const authReducer = authSlice.reducer;
