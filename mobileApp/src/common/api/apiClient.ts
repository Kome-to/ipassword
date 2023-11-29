import {AppConstants, ScenesKey, TOKEN_STORAGE_KEY} from '@common/constants';
import {getTokenStorage} from '@common/utils/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import {stringify} from 'qs';
import DeviceInfo from 'react-native-device-info';
import * as RootNavigation from '../../RootNavigator';
import {notify} from '@common/utils/notify';

const baseURL = AppConstants.API_URL;

const ApiClient = axios.create({
  baseURL,
  timeout: 100000,
  paramsSerializer: (params: any) => stringify(params, {arrayFormat: 'repeat'}),
});

export interface StorageTokenUser {
  Token: string;
}

ApiClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<AxiosRequestConfig>) => {
    let token: string | null = null;
    try {
      const tokenStorage: StorageTokenUser | null = await getTokenStorage();
      if (tokenStorage !== null) {
        const dataTokenStorage: StorageTokenUser = tokenStorage;
        token = dataTokenStorage.Token;
      }
    } catch (err) {
      console.error(err);
    }
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers['Authorization-Token'] = token;
      config.headers.DeviceId = DeviceInfo.getUniqueId();
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

ApiClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error: AxiosError<AxiosResponse>) {
    if (error.response?.status === 401) {
      AsyncStorage.removeItem(TOKEN_STORAGE_KEY);
      RootNavigation.navigate(ScenesKey.AUTH);
    }

    if ((error.toJSON() as any).message === 'Network Error') {
      notify.warning('Please check your Internet connection and try again');
      return Promise.reject();
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  },
);
export {ApiClient};
