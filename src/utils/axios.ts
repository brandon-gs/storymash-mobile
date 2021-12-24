import axios, {AxiosError as TAxiosError} from 'axios';
import {store} from '_store/store';
import {API_URL, API_SECRET} from 'react-native-dotenv';

// Axios client with default token from store and baseURL from env variables
const axiosClient = axios.create({
  baseURL: API_URL,
  headers: {
    authorization: store.getState().auth.token,
    ['api-authorization']: API_SECRET,
  },
});

export const CancelToken = axios.CancelToken;

export type AxiosError = TAxiosError;

export default axiosClient;
