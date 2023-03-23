import axios from 'axios';
import { getCookie } from '../auth/Cookie';

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER,
  timeout: 3000,
});

instance.interceptors.request.use(
  function (config) {

    if (config.url !== '/api/auth/signup' && config.url !== '/api/auth/login') {
      config.headers.Authorization = getCookie('token');
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
