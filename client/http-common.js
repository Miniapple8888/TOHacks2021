import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:80821/',
  headers: {
    'Content-type': 'application/json',
  },
  withCredentials: true,
});