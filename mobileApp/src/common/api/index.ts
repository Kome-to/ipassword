import {UserService} from '@services/user/api';
import {ApiClient} from './apiClient';

export class ApiService {
  public user: UserService;

  constructor() {
    this.user = new UserService(ApiClient);
  }
}
const api = new ApiService();

export default api;
