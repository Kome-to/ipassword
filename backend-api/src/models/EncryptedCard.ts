import { DataTypes, Model } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../common/lib/sequelize';
import { EncryptedCardAttributes } from '../interfaces/User';

class EncryptedCardModel extends Model<EncryptedCardAttributes> {
  declare id: string;
  declare vaultId: string;
  declare displayName: string;
  declare cardholderName: string;
  declare numbers: string;
  declare brand: string;
  declare expirationDate: string;
  declare securityCode: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

EncryptedCardModel.init(
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
    cardholderName: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'cardholder_name',
    },
    numbers: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    expirationDate: {
      type: DataTypes.STRING(200),
      allowNull: false,
      field: 'expiration_date',
    },
    securityCode: {
      type: DataTypes.STRING(200),
      field: 'security_code',
      allowNull: false,
    },
  },
  {
    tableName: 'encrypted_card',
    underscored: true,
    freezeTableName: true,
    sequelize,
  }
);

EncryptedCardModel.beforeCreate((instance) => {
  instance.id = uuidv4();
});

export default EncryptedCardModel;
