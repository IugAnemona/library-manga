import axios from 'axios';

const apiJikan = axios.create({
  baseURL: 'https://api.jikan.moe/v4',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiJikan;
