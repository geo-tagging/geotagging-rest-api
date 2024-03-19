"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tb_aproves", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      id_jenis: {
        type: Sequelize.INTEGER,
      },
      id_kegiatan: {
        type: Sequelize.INTEGER,
      },
      id_lokasi: {
        type: Sequelize.INTEGER,
      },
      id_sk: {
        type: Sequelize.INTEGER,
      },
      tanggal_tanam: {
        type: Sequelize.DATE,
      },
      latitude: {
        type: Sequelize.STRING,
      },
      longitude: {
        type: Sequelize.STRING,
      },
      elevasi: {
        type: Sequelize.STRING,
      },
      images: {
        type: Sequelize.STRING,
      },
      date_modified: {
        type: Sequelize.DATE,
      },
      verification: {
        type: Sequelize.STRING,
      },
      kondisi: {
        type: Sequelize.STRING,
      },
      uid: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Aproves");
  },
};
