import { Op } from 'sequelize';
import UserModel from '../models/User';

class UserRepository {
  async getById(id: string, safe = true) {
    return UserModel.findOne({
      where: { id },
      attributes: { exclude: safe ? ['password', 'token'] : [] },
    });
  }

  async getByEmailOrUsername(email: string) {
    return UserModel.findOne({
      where: {
        [Op.or]: [{ email }],
      },
    });
  }

  async getByEmail(email: string, safe = true) {
    return UserModel.findOne({
      where: { email },
      attributes: { exclude: safe ? ['password', 'token'] : [] },
    });
  }

  async getByMasterPassword(password: string) {
    return UserModel.findOne({
      where: { masterPasswordHash: password },
    });
  }
}

export default new UserRepository();
