"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("jenis", [
      {
        nama: "Alaban",
        kategori: "Local",
      },
      {
        nama: "Ambaratan",
        kategori: "Local",
      },
      {
        nama: "Asam Jawa",
        kategori: "Local",
      },
      {
        nama: "Cempedak",
        kategori: "Local",
      },
      {
        nama: "Jabon",
        kategori: "Local",
      },
      {
        nama: "Kangkung Liar",
        kategori: "Local",
      },
      {
        nama: "Karamunting",
        kategori: "Local",
      },
      {
        nama: "Kasturi",
        kategori: "Local",
      },
      {
        nama: "Kayu Kuku",
        kategori: "Local",
      },
      {
        nama: "Kayu Manis",
        kategori: "Local",
      },
      {
        nama: "Kayu Putih",
        kategori: "Local",
      },
      {
        nama: "Kelapa",
        kategori: "Local",
      },
      {
        nama: "Kemiri",
        kategori: "Local",
      },
      {
        nama: "Kersen",
        kategori: "Local",
      },
      {
        nama: "Keruing",
        kategori: "Local",
      },
      {
        nama: "Lamtoro",
        kategori: "Local",
      },
      {
        nama: "Langsat",
        kategori: "Local",
      },
      {
        nama: "Lengkeng",
        kategori: "Local",
      },
      {
        nama: "Mahang",
        kategori: "Local",
      },
      {
        nama: "Mallotus",
        kategori: "Local",
      },
      {
        nama: "Matoa",
        kategori: "Local",
      },
      {
        nama: "Meranti",
        kategori: "Local",
      },
      {
        nama: "Nangka",
        kategori: "Local",
      },
      {
        nama: "Pasak Bumi",
        kategori: "Local",
      },
      {
        nama: "Petai",
        kategori: "Local",
      },
      {
        nama: "Pulai",
        kategori: "Local",
      },
      {
        nama: "Ramania",
        kategori: "Local",
      },
      {
        nama: "Rambai",
        kategori: "Local",
      },
      {
        nama: "Rotan",
        kategori: "Local",
      },
      {
        nama: "Srikaya",
        kategori: "Local",
      },
      {
        nama: "Sungkai",
        kategori: "Local",
      },
      {
        nama: "Tanjung",
        kategori: "Local",
      },
      {
        nama: "Tembesu",
        kategori: "Local",
      },
      {
        nama: "Tengkawang",
        kategori: "Local",
      },
      {
        nama: "Ulin",
        kategori: "Local",
      },
      {
        nama: "Waru laut",
        kategori: "Local",
      },
      {
        nama: "Ylang-ylang",
        kategori: "Local",
      },
      {
        nama: "Akasia",
        kategori: "Non Local",
      },
      {
        nama: "Alpukat",
        kategori: "Non Local",
      },
      {
        nama: "Angsana",
        kategori: "Non Local",
      },
      {
        nama: "Jarak",
        kategori: "Non Local",
      },
      {
        nama: "Mahoni",
        kategori: "Non Local",
      },
      {
        nama: "Rumput Vetiver",
        kategori: "Non Local",
      },
      {
        nama: "Sengon",
        kategori: "Non Local",
      },
      {
        nama: "Sengon buto",
        kategori: "Non Local",
      },
      {
        nama: "Sepatudea",
        kategori: "Non Local",
      },
      {
        nama: "Sereh Wangi",
        kategori: "Non Local",
      },
      {
        nama: "Sirsak",
        kategori: "Non Local",
      },
      {
        nama: "Trembesi",
        kategori: "Non Local",
      },
      {
        nama: "Turi",
        kategori: "Non Local",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("jenis", {}, null);
  },
};
