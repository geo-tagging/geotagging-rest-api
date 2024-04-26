"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("tb_action", [
      {
        action: "Unverified",
      },
      {
        action: "Approve",
      },
      {
        action: "Rejected",
      },
      {
        action: "Edited",
      },
      {
        action: "Deleted",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("tb_action", {}, null);
  },
};
