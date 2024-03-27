"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tb_approve", {
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
      id_status: {
        type: Sequelize.INTEGER,
      },
      diameter: {
        type: Sequelize.DOUBLE,
      },
      tinggi: {
        type: Sequelize.DOUBLE,
      },
      tanggal_tanam: {
        type: Sequelize.DATE,
      },
      date_modified: {
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
      easting: {
        type: Sequelize.STRING,
      },
      northing: {
        type: Sequelize.STRING,
      },
      images: {
        type: Sequelize.STRING,
      },
      id_action: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("tb_approve");
  },
};
