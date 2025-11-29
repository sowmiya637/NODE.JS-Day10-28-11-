'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("Students", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true //unique identifier for each row.
      },
      name: {
        type: Sequelize.STRING,
      },
      department: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("Students");   //Deletes the Students table, Ends the migration file.
  }
};
