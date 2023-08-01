import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  fetchFavotiteNotices,
  fetchUserNotices,
  fetchAddToFavorite,
  fetchDeleteFromFavorite,
} from './operations';

const initialState = {
  items: [],
  totalPages: null,
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
  state.totalPages = action.payload.totalPages;
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
      .addCase(fetchFavotiteNotices.pending, state => {
        state.items = [];
        handlePending(state);
      })
      .addCase(fetchFavotiteNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchFavotiteNotices.rejected, (state, action) => {
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
      .addCase(fetchAddToFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAddToFavorite.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.favoritePets.push(action.payload.id);
        state.error = null;
      })
      .addCase(fetchAddToFavorite.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(fetchDeleteFromFavorite.pending, state => {
        //         state.loading = true;
      })
      .addCase(fetchDeleteFromFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (Array.isArray(state.user.favorite)) {
          state.user.favorite = state.user.favorite.filter(
            id => id !== payload.id
          );
        }
      })
      .addCase(fetchDeleteFromFavorite.rejected, (state, { payload }) => {
        state.notices = { data: [] };
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const noticesReducer = noticesSlice.reducer;
