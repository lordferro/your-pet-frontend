import axios from 'axios';

const fetchFriends = async () => {
  const response = await axios.get('/friends');
  return response.data;
};

export default fetchFriends;
