import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://your-pets-backend.onrender.com/api',
});

export const getUserFavoritesNotices = async () => {
  const { data } = await instance.get(`/notices/favorites`);
  return data;
};

export const getUserNotices = async () => {
  const { data } = await instance.get(`notices/user/notices`);
  return data;
};
