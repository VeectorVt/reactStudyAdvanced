import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000, // Set a timeout of 10 seconds
    headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    },
});

