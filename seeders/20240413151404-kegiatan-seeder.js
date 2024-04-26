"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("tb_kegiatan", [
      {
        kegiatan: "Tanaman baru",
      },
      {
        kegiatan: "Sulaman",
      },
      {
        kegiatan: "Sisipan",
      },
      {
        kegiatan: "Monitoring",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("tb_kegiatan", {}, null);
  },
};
