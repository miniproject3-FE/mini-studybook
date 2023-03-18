import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_API_SERVER,
  timeout: 1,
});

instance.interceptors.request.use();
