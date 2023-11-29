module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('group_user', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      userId: {
        type: Sequelize.UUID,
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
      groupId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'group',
          },
          key: 'id',
        },
        allowNull: false,
        field: 'group_id',
        onDelete: 'CASCADE',
      },
      protectedSymmetricKey: {
        type: Sequelize.STRING(700),
        allowNull: false,
        field: 'protected_symmetric_key',
      },
      role: {
        type: Sequelize.STRING(60),
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
    await queryInterface.dropTable('group_user');
  },
};
