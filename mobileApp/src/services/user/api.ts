import {CreatePasswordParams, UserRegisterParams} from '@common/api/apiTypes';
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
    const {data} = await this.axios.get(`${userUrl}/data`);
    return data;
  };
}
