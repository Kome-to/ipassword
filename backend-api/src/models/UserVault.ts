import { DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../common/lib/sequelize';
import { UserVaultAttributes, VaultAttributes } from '../interfaces/User';

class UserVaultModel extends Model<UserVaultAttributes> {
  declare id: string;
  declare userId: string;
  declare vaultId: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

UserVaultModel.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: {
          tableName: 'user',
        },
        key: 'id',
      },
      allowNull: false,
      field: 'user_id',
      onDelete: 'CASCADE',
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
  },
  {
    tableName: 'user_vault',
    underscored: true,
    freezeTableName: true,
    sequelize,
  }
);

UserVaultModel.beforeCreate((instance) => {
  instance.id = uuidv4();
});

export default UserVaultModel;
