'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("users", "role", {
      type: Sequelize.STRING,
      allowNull:false,
      defaultValue: "user"
    });

    await queryInterface.addColumn("products", "category", {
      type: Sequelize.STRING,
      allowNull:false,
      defaultValue: "general"
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("users", "role");
    await queryInterface.removeColumn("products", "category");
  }
};
