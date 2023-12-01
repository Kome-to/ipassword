import { DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../common/lib/sequelize';
import { GroupAttributes } from '../interfaces/User';

class GroupModel extends Model<GroupAttributes> {
  declare id: string;
  declare name: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

GroupModel.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    ownerId: {
      type: DataTypes.UUID,
      references: {
        model: {
          tableName: 'user',
        },
      },
      field: 'owner_id',
    },
  },
  {
    tableName: 'group',
    underscored: true,
    freezeTableName: true,
    sequelize,
  }
);

GroupModel.beforeCreate((instance) => {
  instance.id = uuidv4();
});

export default GroupModel;
