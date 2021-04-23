import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const http = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
});
