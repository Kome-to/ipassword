/* eslint-disable no-undef */
import * as crypto from 'crypto-js';
import BadRequestError from '../common/errors/types/BadRequestError';
import { UserAttributes } from '../interfaces/User';
import UserModel from '../models/User';
import UserRepository from '../repositories/user';

class AuthServices {
  /**
   * Create new user
   * @param  {string} email
   * @param  {string} username
   * @param  {string} password
   * @returns Promise
   */
  async createUser(data: UserAttributes): Promise<UserAttributes | undefined> {
    const user = await UserRepository.getByEmailOrUsername(data.email);

    if (user) {
      throw new BadRequestError('User exist');
    }
    return UserModel.create({ ...data });
  }
}

export default AuthServices;
