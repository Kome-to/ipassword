import bcrypt from '../common/lib/bcrypt';
import BadRequestError from '../common/errors/types/BadRequestError';
import UserRepository from './user';

class AuthRepository {
  async checkAuthentication(password: string): Promise<any | undefined> {
    const user = await UserRepository.getByMasterPassword(password);

    if (!user) {
      return undefined;
    }

    return user;
  }
}

export default new AuthRepository();
