import axios, { AxiosInstance } from 'axios';
import { Setting } from '../consts';
import { getToken } from './token';


const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: Setting.BaseUrl,
    timeout: Setting.ApiTimeout
  });

  api.interceptors.request.use((config) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['X-Token'] = token;
    }

    return config;

  });

  return api;
};

export { createAPI };
