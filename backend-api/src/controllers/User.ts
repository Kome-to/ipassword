import { Request, Response } from 'express';
import { Op } from 'sequelize';

import { v4 as uuidv4 } from 'uuid';
import response from '../common/helpers/response';
import { UserAttributes } from '../interfaces/User';
import EncryptedNoteModel from '../models/EncryptedNote';
import EncryptedPasswordModel from '../models/EncryptedPassword';
import UserVaultModel from '../models/UserVault';
import VaultModel from '../models/Vault';
import UserRepository from '../repositories/user';

export const userSerializer = (user: UserAttributes) => ({
  id: user.id,
  email: user.email,
  masterPasswordHash: user.masterPasswordHash,
  protectedSymmetricKey: user.protectedSymmetricKey,
  protectedRsaPrivateKey: user.protectedRsaPrivateKey,
  publicRsaKey: user.publicRsaKey,
  phoneNumber: user.phoneNumber,
  firstName: user.firstName,
  lastName: user.lastName,
  premiumStatus: user.premiumStatus,
});

class UserController {
  public getMe = async (req: Request, res: Response) => {
    const user = await UserRepository.getById(req.user.id);
    response.success(res, user);
  };

  public getData = async (req: Request, res: Response) => {
    const userVaults = await UserVaultModel.findAll({ where: { userId: req.user.id } });

    const vaults = await VaultModel.findAll({
      where: {
        id: {
          [Op.in]: [...userVaults.map((userVault) => userVault.vaultId)],
        },
      },
    });

    const passwords = await EncryptedPasswordModel.findAll({
      where: {
        vaultId: {
          [Op.in]: [...vaults.filter((vault) => vault.dataType === 'PASSWORD').map((vault) => vault.id)],
        },
      },
    });

    const notes = await EncryptedNoteModel.findAll({
      where: {
        vaultId: {
          [Op.in]: [...vaults.filter((vault) => vault.dataType === 'NOTE').map((vault) => vault.id)],
        },
      },
    });

    const cards = [];

    response.success(res, { passwords, notes, cards });
  };

  public createPassword = async (req: Request, res: Response) => {
    const { displayName, username, password, url, serviceName } = req.body;

    const vault = await VaultModel.create({
      id: uuidv4(),
      dataType: 'PASSWORD',
      type: 'USER',
    });

    const userVault = await UserVaultModel.create({
      id: uuidv4(),
      userId: req.user.id,
      vaultId: vault.id,
    });

    const passwordRecord = await EncryptedPasswordModel.create({
      id: uuidv4(),
      vaultId: vault.id,
      displayName,
      username,
      password,
      url,
      serviceName,
    });

    response.success(res, { passwordRecord });
  };

  public createNote = async (req: Request, res: Response) => {
    const { displayName, content } = req.body;

    const vault = await VaultModel.create({
      id: uuidv4(),
      dataType: 'NOTE',
      type: 'USER',
    });

    const userVault = await UserVaultModel.create({
      id: uuidv4(),
      userId: req.user.id,
      vaultId: vault.id,
    });

    const note = await EncryptedNoteModel.create({
      id: uuidv4(),
      displayName,
      vaultId: vault.id,
      content,
    });

    response.success(res, { note });
  };
}

export default new UserController();
