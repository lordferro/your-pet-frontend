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
export const deleteUserNoticeById = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const { data } = await instance.delete(`notices/${id}`, config);
  return data;
};
