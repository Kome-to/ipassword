import { Model, DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import { Role } from '../common/enum';
import sequelize from '../common/lib/sequelize';
import { UserAttributes } from '../interfaces/User';

class UserModel extends Model<UserAttributes> {
  declare id: string;
  declare email: string;
  declare phoneNumber: string;
  declare firstName: string;
  declare lastName: string;
  declare masterPasswordHash: string;
  declare protectedSymmetricKey: string;
  declare protectedRsaPrivateKey: string;
  declare publicRsaKey: string;
  declare premiumStatus: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

UserModel.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING(14),
      field: 'phone_number',
    },
    firstName: {
      type: DataTypes.STRING(200),
      field: 'first_name',
    },
    lastName: {
      type: DataTypes.STRING(200),
      field: 'last_name',
    },
    masterPasswordHash: {
      type: DataTypes.STRING(700),
      allowNull: false,
    },
    protectedSymmetricKey: {
      type: DataTypes.STRING(700),
      allowNull: false,
      field: 'protected_symmetric_key',
    },
    protectedRsaPrivateKey: {
      type: DataTypes.STRING(700),
      allowNull: false,
      field: 'protected_rsa_private_key',
    },
    publicRsaKey: {
      type: DataTypes.STRING(700),
      allowNull: false,
      field: 'public_rsa_key',
    },
    premiumStatus: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
      field: 'premium_status',
    },
  },
  {
    tableName: 'user',
    underscored: true,
    freezeTableName: true,
    sequelize,
  }
);

UserModel.beforeCreate((instance) => {
  instance.id = uuidv4();
});

export default UserModel;
