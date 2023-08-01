import axios from 'axios';

export const getCurrentUser = async () => {
  const response = await axios.get('/auth/current');
  return response.data;
};
