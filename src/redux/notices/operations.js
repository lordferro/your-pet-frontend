import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  getUserFavoritesNotices,
  getUserNotices,
  addToFavoriteNotices,
  removeFromFavoriteNotices,
} from 'services/noticesAPI';

export const fetchPage = createAsyncThunk(
  'notices/page',
  async (_, thunkAPI) => {
    try {
      const { category, searchQuery } = thunkAPI.getState().filters;
      const params = {
        action: category,
        searchQuery: searchQuery,
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

export const fetchNotices = createAsyncThunk(
  'notices/filter',
  async (_, thunkAPI) => {
    try {
      const { category, searchQuery, page } = thunkAPI.getState().filters;
      const params = {
        action: category,
        searchQuery: searchQuery,
        page,
        limit: 4,
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
  'notices/addFavorite',
  async (id, { rejectWithValue }) => {
    try {
      await addToFavoriteNotices(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const fetchRemoveFromFavorite = createAsyncThunk(
  'notices/removeFavorite',
  async (id, { rejectWithValue }) => {
    try {
     await removeFromFavoriteNotices(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
