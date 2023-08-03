import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  getUserFavoritesNotices,
  getUserNotices,
  addToFavoriteNotices,
  removeFromFavoriteNotices,
  addPet,
  deletePet,
} from 'services/noticesAPI';

export const fetchPage = createAsyncThunk(
  'notices/page',
  async (_, thunkAPI) => {
    try {
      const { category, searchQuery } = thunkAPI.getState().filters;
      const params = {
        action: category,
        searchQuery: searchQuery,
        limit: 0,
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
        limit: 12,
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

export const addPetThunk = createAsyncThunk(
  'notices/addPet',
  async (pet, { rejectWithValue }) => {
    try {
    const res = await addPet(pet);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deletePetThunk = createAsyncThunk(
  'notices/deletePet',
  async (id, { rejectWithValue }) => {
    try {
    await deletePet(id);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
