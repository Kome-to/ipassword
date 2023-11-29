module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('group_vault', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
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
      vaultId: {
        type: Sequelize.UUID,
        references: {
          model: {
            tableName: 'vault',
          },
          key: 'id',
        },
        allowNull: false,
        field: 'vault',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('group_vault');
  },
};
