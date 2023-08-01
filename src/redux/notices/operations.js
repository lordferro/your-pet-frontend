import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getUserFavoritesNotices,
  getUserNotices,
  instance,
} from 'services/noticesAPI';

export const fetchNotices = createAsyncThunk(
  'notices/filter',
  async (_, thunkAPI) => {
    try {
      const { category, searchQuery, page, limit, sex, age } =
        thunkAPI.getState().filters;
      const params = {
        action: category,
        searchQery: searchQuery,
        page,
        limit,
        sex,
        age,
      };
      const response = await instance.get(`/notices`, {
        params,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavotiteNotices = createAsyncThunk(
  'notices/favorites',
  async (_, thunkAPI) => {
    try {
      const response = await getUserFavoritesNotices();
      return response.favorite;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserNotices = createAsyncThunk(
  'notices/user/notices',
  async (_, thunkAPI) => {
    try {
      const response = await getUserNotices();
      return response.notices;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
