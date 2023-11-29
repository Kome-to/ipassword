module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('encrypted_card', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      vaultId: {
        type: Sequelize.UUID,
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
      displayName: {
        type: Sequelize.STRING(200),
        allowNull: false,
        field: 'display_name',
      },
      cardholderName: {
        type: Sequelize.STRING(200),
        allowNull: false,
        field: 'cardholder_name',
      },
      numbers: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      brand: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      expirationDate: {
        type: Sequelize.STRING(200),
        allowNull: false,
        field: 'expiration_date',
      },
      securityCode: {
        type: Sequelize.STRING(200),
        field: 'security_code',
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('encrypted_card');
  },
};
