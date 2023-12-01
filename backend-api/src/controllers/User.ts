import { Request, Response } from 'express';
import { Op } from 'sequelize';

import { v4 as uuidv4 } from 'uuid';
import response from '../common/helpers/response';
import { UserAttributes } from '../interfaces/User';
import EncryptedNoteModel from '../models/EncryptedNote';
import EncryptedCardModel from '../models/EncryptedCard';
import EncryptedPasswordModel from '../models/EncryptedPassword';
import UserVaultModel from '../models/UserVault';
import VaultModel from '../models/Vault';
import UserRepository from '../repositories/user';
import GroupModel from '../models/Group';
import GroupUserModel from '../models/GroupUser';

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

    const cards = await EncryptedCardModel.findAll({
      where: {
        vaultId: {
          [Op.in]: [...vaults.filter((vault) => vault.dataType === 'CARD').map((vault) => vault.id)],
        },
      },
    });

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

  public createCard = async (req: Request, res: Response) => {
    const { displayName, cardholderName, numbers, brand, expirationDate, securityCode } = req.body;

    const vault = await VaultModel.create({
      id: uuidv4(),
      dataType: 'CARD',
      type: 'USER',
    });

    const userVault = await UserVaultModel.create({
      id: uuidv4(),
      userId: req.user.id,
      vaultId: vault.id,
    });

    const card = await EncryptedCardModel.create({
      id: uuidv4(),
      vaultId: vault.id,
      displayName,
      cardholderName,
      numbers,
      brand,
      expirationDate,
      securityCode,
    });

    response.success(res, { card });
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

  public createGroup = async (req: Request, res: Response) => {
    const { name, protectedSymmetricKey } = req.body;

    const group = await GroupModel.create({
      id: uuidv4(),
      ownerId: req.user.id,
      name,
    });

    await GroupUserModel.create({
      id: uuidv4(),
      userId: req.user.id,
      groupId: group.id,
      protectedSymmetricKey,
      role: 'OWNER',
    });

    response.success(res, { group });
  };

  public getGroups = async (req: Request, res: Response) => {
    let groups = [];
    groups = await GroupModel.findAll({
      where: { ownerId: req.user.id },
    });

    // groups = groups.map(async (group) => {
    //   const members = await GroupUserModel.findAll({ where: { groupId: group.id } });
    //   return { id: group.id, name: group.name, ownerId: group.ownerId, createdAt: group.createdAt, updatedAt: group.updatedAt, members };
    // });
    // console.log(groups);
    response.success(res, { groups });
  };
}

export default new UserController();
