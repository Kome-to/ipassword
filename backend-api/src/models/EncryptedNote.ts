import { DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../common/lib/sequelize';
import { EncryptedNoteAttributes } from '../interfaces/User';

class EncryptedNoteModel extends Model<EncryptedNoteAttributes> {
  declare id: string;
  declare vaultId: string;
  declare displayName: string;
  declare content: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

EncryptedNoteModel.init(
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
    content: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },
  {
    tableName: 'encrypted_note',
    underscored: true,
    freezeTableName: true,
    sequelize,
  }
);

EncryptedNoteModel.beforeCreate((instance) => {
  instance.id = uuidv4();
});

export default EncryptedNoteModel;
