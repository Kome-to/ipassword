import { DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../common/lib/sequelize';
import { GroupAttributes, GroupUserAttributes } from '../interfaces/User';

class GroupUserModel extends Model<GroupUserAttributes> {
  declare id: string;
  declare user_id: string;
  declare group_id: string;
  declare protectedSymmetricKey: string;
  declare role: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

GroupUserModel.init(
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
      },
      field: 'user_id',
    },
    groupId: {
      type: DataTypes.UUID,
      references: {
        model: {
          tableName: 'group',
        },
      },
      field: 'group_id',
    },
    role: { type: DataTypes.STRING(200), allowNull: false },
    protectedSymmetricKey: {
      type: DataTypes.STRING(700),
      allowNull: false,
      field: 'protected_symmetric_key',
    },
  },
  {
    tableName: 'group_user',
    underscored: true,
    freezeTableName: true,
    sequelize,
  }
);

GroupUserModel.beforeCreate((instance) => {
  instance.id = uuidv4();
});

export default GroupUserModel;
