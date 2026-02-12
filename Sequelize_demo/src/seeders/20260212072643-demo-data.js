'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert("users", [
      {
        name: "Admin User",
        email: "admin@test.com",
        password: "123456",
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);

    await queryInterface.bulkInsert("products", [
      {
        name: "Laptop",
        description: "Gaming laptop",
        price: 80000,
        stock: 10,
        category: "electronics",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
    await queryInterface.bulkDelete("products", null, {});
  }
};
