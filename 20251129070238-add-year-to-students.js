'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn("Students", "year", {
      type: Sequelize.INTEGER
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn("Students", "year");  //Removes the year column from the Students table.
  }
};
