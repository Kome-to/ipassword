module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('user', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      email: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false,
      },
      phoneNumber: {
        type: Sequelize.STRING(14),
        field: 'phone_number',
      },
      firstName: {
        type: Sequelize.STRING(200),
        field: 'first_name',
      },
      lastName: {
        type: Sequelize.STRING(200),
        field: 'last_name',
      },
      masterPasswordHash: {
        type: Sequelize.STRING(700),
        allowNull: false,
        field: 'master_password_hash',
      },
      protectedSymmetricKey: {
        type: Sequelize.STRING(700),
        allowNull: false,
        field: 'protected_symmetric_key',
      },
      protectedRsaPrivateKey: {
        type: Sequelize.STRING(700),
        allowNull: false,
        field: 'protected_rsa_private_key',
      },
      publicRsaKey: {
        type: Sequelize.STRING(700),
        allowNull: false,
        field: 'public_rsa_key',
      },
      premiumStatus: {
        type: Sequelize.STRING(50),
        allowNull: false,
        defaultValue: '',
        field: 'premium_status',
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
    await queryInterface.dropTable('user');
  },
};
