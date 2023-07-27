import axios from 'axios';

const fetchFriends = async () => {
  const response = await axios.get('/friends');
  console.log(response.data);
  return response.data;
};

export default fetchFriends;
