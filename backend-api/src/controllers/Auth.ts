import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

import BadRequestError from '../common/errors/types/BadRequestError';
import response from '../common/helpers/response';
import { generateToken } from '../common/lib/passports';
import messages from '../common/messages';
import AuthRepository from '../repositories/auth';
import AuthServices from '../services/Auth';

class AuthController extends AuthServices {
  public register = async (req: Request, res: Response) => {
    const { email, masterPasswordHash, protectedSymmetricKey, protectedRsaPrivateKey, publicRsaKey } = req.body;

    const user = await this.createUser({
      id: uuidv4(),
      email,
      masterPasswordHash,
      protectedSymmetricKey,
      protectedRsaPrivateKey,
      publicRsaKey,
      phoneNumber: '',
      firstName: '',
      lastName: '',
      premiumStatus: '',
    });

    const token = generateToken(user);

    response.success(res, { token });
  };

  public login = async (req: Request, res: Response) => {
    const { masterPasswordHash } = req.body;
    const userData = await AuthRepository.checkAuthentication(masterPasswordHash);
    if (userData) {
      const token = generateToken(userData);
      response.success(res, { token, user: userData });
    } else {
      throw new BadRequestError(messages.auth.failed);
    }
  };
}

export default new AuthController();
