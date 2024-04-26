"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("tb_lokasi", [
      {
        lokasi: "Body River Katal-katal",
      },
      {
        lokasi: "M1E",
      },
      {
        lokasi: "M1EE",
      },
      {
        lokasi: "M1EW",
      },
      {
        lokasi: "M1W",
      },
      {
        lokasi: "M2EE",
      },
      {
        lokasi: "M2W",
      },
      {
        lokasi: "M23 Nhy",
      },
      {
        lokasi: "M23E",
      },
      {
        lokasi: "M23E Nhy",
      },
      {
        lokasi: "M23EC",
      },
      {
        lokasi: "M23EE",
      },
      {
        lokasi: "M23EW",
      },
      {
        lokasi: "M4 Nhy",
      },
      {
        lokasi: "M45C",
      },
      {
        lokasi: "M4E",
      },
      {
        lokasi: "M4EC",
      },
      {
        lokasi: "M4EW",
      },
      {
        lokasi: "M4W",
      },
      {
        lokasi: "M5E",
      },
      {
        lokasi: "Reservoir PT BAS",
      },
      {
        lokasi: "Sediment Pond UW",
      },
      {
        lokasi: "U210",
      },
      {
        lokasi: "UCE",
      },
      {
        lokasi: "UCW",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("tb_lokasi", {}, null);
  },
};
