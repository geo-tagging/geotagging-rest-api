"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("tb_sk", [
      {
        skppkh: "671",
      },
      {
        skppkh: "1080",
      },
      {
        skppkh: "APL",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("tb_sk", {}, null);
  },
};
