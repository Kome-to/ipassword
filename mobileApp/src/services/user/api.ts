import {CreatePasswordParams, UserRegisterParams} from '@common/api/apiTypes';
import {AxiosInstance} from 'axios';

const authUrl = '/api/v1/auth';
const userUrl = '/api/v1/users';

export class UserService {
  constructor(private axios: AxiosInstance) {}

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

  getData = async () => {
    const {data} = await this.axios.get(`${userUrl}/data`);
    return data;
  };
}
