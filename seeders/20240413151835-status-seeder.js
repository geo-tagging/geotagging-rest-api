"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("tb_status", [
      {
        status: "Hidup",
      },
      {
        status: "Mati",
      },
      {
        status: "Merana/Kritis",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("tb_status", {}, null);
  },
};
