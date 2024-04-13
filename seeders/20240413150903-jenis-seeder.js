"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("jenis", [
      {
        nama: "NodeJs",
      },
      {
        nama: "VueJS",
      },
      {
        nama: "ReactJS",
      },
      {
        nama: "ReactNative",
      },
      {
        nama: "Laravel",
      },
      {
        nama: "Flutter",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("jenis", {}, null);
  },
};
