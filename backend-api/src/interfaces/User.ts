import { Role } from '../common/enum';

export interface UserAttributes {
  id: string;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  masterPasswordHash: string;
  protectedSymmetricKey: string;
  protectedRsaPrivateKey: string;
  publicRsaKey: string;
  premiumStatus: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserDTO {
  id: string;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  masterPasswordHash: string;
  protectedSymmetricKey: string;
  protectedRsaPrivateKey: string;
  publicRsaKey: string;
  premiumStatus: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface VaultAttributes {
  id: string;
  dataType: string;
  type: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserVaultAttributes {
  id: string;
  userId: string;
  vaultId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface EncryptedPasswordAttributes {
  id: string;
  displayName: string;
  username: string;
  vaultId: string;
  password: string;
  serviceName: string;
  url: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface EncryptedNoteAttributes {
  id: string;
  displayName: string;
  vaultId: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
}
