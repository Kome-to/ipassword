import {CreatePasswordParams, UserRegisterParams} from '@common/api/apiTypes';
import {SYMMETRIC_KEY} from '@common/constants';
import {passwordTransform} from '@pages/home/util';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AxiosInstance} from 'axios';

const authUrl = '/api/v1/auth';
const userUrl = '/api/v1/users';

export class UserService {
  constructor(private axios: AxiosInstance) {}

  getMe = async () => {
    const {data} = await this.axios.get(`${userUrl}/me`);

    return data;
  };

  register = async (params: UserRegisterParams) => {
    const {data} = await this.axios.post(`${authUrl}/register`, params);

    return data;
  };

  login = async (params: {masterPasswordHash: string}) => {
    const {data} = await this.axios.post(`${authUrl}/login`, params);
    return data;
  };

  createPassword = async (params: CreatePasswordParams) => {
    const {data} = await this.axios.post(`${userUrl}/password`, params);
    return data;
  };
  updatePassword = async (params) => {
    const {data} = await this.axios.put(`${userUrl}/password`, params);
    return data;
  };
  deletePassword = async (params) => {
    const {data} = await this.axios.delete(`${userUrl}/password`, {params});
    return data;
  };
  updateNote = async (params) => {
    const {data} = await this.axios.put(`${userUrl}/note`, params);
    return data;
  };
  deleteNote = async (params) => {
    const {data} = await this.axios.delete(`${userUrl}/note`, {params});
    return data;
  };
  updateCard = async (params) => {
    const {data} = await this.axios.put(`${userUrl}/card`, params);
    return data;
  };
  deleteCard = async (params) => {
    const {data} = await this.axios.delete(`${userUrl}/card`, {params});
    return data;
  };

  createNote = async (params: CreatePasswordParams) => {
    const {data} = await this.axios.post(`${userUrl}/note`, params);
    return data;
  };

  createCard = async (params) => {
    const {data} = await this.axios.post(`${userUrl}/card`, params);
    return data;
  };

  createGroup = async (params) => {
    const {data} = await this.axios.post(`${userUrl}/group`, params);
    return data;
  };

  getGroups = async () => {
    const {data} = await this.axios.get(`${userUrl}/groups`);
    return data;
  };

  getData = async () => {
    const {data: result1} = await this.axios.get(`${userUrl}/data`);
    const {data: result2} = result1;
    const keyValue = await AsyncStorage.getItem(SYMMETRIC_KEY);
    const key = JSON.parse(keyValue || '').SymmetricKey;
    if (key) {
      let {passwords, notes, cards} = result2;

      passwords = passwords.map((item) => {
        const en = passwordTransform(item, key, 'de');
        return en;
      });

      return {data: {passwords, notes, cards}};
    }
    return {data: {passwords: [], notes: [], cards: []}};
  };
}
