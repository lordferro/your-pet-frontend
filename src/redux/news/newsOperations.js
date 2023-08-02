import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchNews = createAsyncThunk(
  'news/all',
  async ({ searchQuery, page }, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://your-pet.onrender.com/api/news',
        {
          params: {
            search: searchQuery,
            page,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
