'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() =>
      queryInterface.addConstraint("Products", {
        fields: ["user_id"],
        type: "foreign key",
        name: "user_fk",
        references: {
          table: "User",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      })
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};