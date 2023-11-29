import { DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../common/lib/sequelize';
import { VaultAttributes } from '../interfaces/User';

class VaultMode extends Model<VaultAttributes> {
  declare id: string;
  declare dataType: string;
  declare type: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

VaultMode.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    dataType: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },
  {
    tableName: 'vault',
    underscored: true,
    freezeTableName: true,
    sequelize,
  }
);

VaultMode.beforeCreate((instance) => {
  instance.id = uuidv4();
});

export default VaultMode;
