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
    },
    firstName: {
      type: DataTypes.STRING(200),
    },
    lastName: {
      type: DataTypes.STRING(200),
    },
    masterPasswordHash: {
      type: DataTypes.STRING(700),
      allowNull: false,
    },
    protectedSymmetricKey: {
      type: DataTypes.STRING(700),
      allowNull: false,
    },
    protectedRsaPrivateKey: {
      type: DataTypes.STRING(700),
      allowNull: false,
    },
    publicRsaKey: {
      type: DataTypes.STRING(700),
      allowNull: false,
    },
    premiumStatus: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
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
