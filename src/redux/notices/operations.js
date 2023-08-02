import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  getUserFavoritesNotices,
  getUserNotices,
  addToFavoriteNotices,
  removeFromFavoriteNotices,
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
      const response = await axios.get(`/notices`, {
        params,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavoriteNotices = createAsyncThunk(
  'notices/favorites',
  async (_, thunkAPI) => {
    try {
      const response = await getUserFavoritesNotices();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserNotices = createAsyncThunk(
  'notices/own',
  async (_, thunkAPI) => {
    try {
      const response = await getUserNotices();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAddToFavorite = createAsyncThunk(
  'notices/favorites',
  async (id, { rejectWithValue }) => {
    try {
      const data = await addToFavoriteNotices(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchRemoveFromFavorite = createAsyncThunk(
  '/notices/favorites',
  async (id, { rejectWithValue }) => {
    try {
      const data = await removeFromFavoriteNotices(id);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
