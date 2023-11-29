import { DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../common/lib/sequelize';
import { EncryptedPasswordAttributes } from '../interfaces/User';

class EncryptedPasswordModel extends Model<EncryptedPasswordAttributes> {
  declare id: string;
  declare displayName: string;
  declare vaultId: string;
  declare username: string;
  declare password: string;
  declare serviceName: string;
  declare url: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

EncryptedPasswordModel.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    displayName: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'display_name',
    },
    vaultId: {
      type: DataTypes.UUID,
      references: {
        model: {
          tableName: 'vault',
        },
        key: 'id',
      },
      allowNull: false,
      field: 'vault_id',
      onDelete: 'CASCADE',
    },
    username: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    serviceName: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'service_name',
    },
    url: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },
  {
    tableName: 'encrypted_password',
    underscored: true,
    freezeTableName: true,
    sequelize,
  }
);

EncryptedPasswordModel.beforeCreate((instance) => {
  instance.id = uuidv4();
});

export default EncryptedPasswordModel;
