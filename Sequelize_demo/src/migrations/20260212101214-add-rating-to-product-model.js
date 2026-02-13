'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('products', 'rating' ,{
      type : DataTypes.INTEGER,
      allowNull : false,
      defaultValue : 0
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('products', 'rating')
  }
};
