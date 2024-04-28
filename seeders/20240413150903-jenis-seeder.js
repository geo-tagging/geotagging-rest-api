"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("tb_jenis", [
      {
        nama: "Alaban",
        kategori: "Local",
      },
      {
        nama: "Alpukat",
        kategori: "Local",
      },
      {
        nama: "Ambaratan",
        kategori: "Local",
      },
      {
        nama: "Angsana",
        kategori: "Local",
      },
      {
        nama: "Asam Jawa",
        kategori: "Local",
      },
      {
        nama: "Bakau",
        kategori: "Local",
      },
      {
        nama: "Bangkal",
        kategori: "Local",
      },
      {
        nama: "Bangkirai",
        kategori: "Local",
      },
      {
        nama: "Belangiran",
        kategori: "Local",
      },
      {
        nama: "Binuang Laki",
        kategori: "Local",
      },
      {
        nama: "Bungur",
        kategori: "Local",
      },
      {
        nama: "Cemara",
        kategori: "Local",
      },
      {
        nama: "Cempedak",
        kategori: "Local",
      },
      {
        nama: "Damar",
        kategori: "Local",
      },
      {
        nama: "Duabanga",
        kategori: "Local",
      },
      {
        nama: "Durian",
        kategori: "Local",
      },
      {
        nama: "Ficus/Beringin",
        kategori: "Local",
      },
      {
        nama: "Gaharu",
        kategori: "Local",
      },
      {
        nama: "Galam",
        kategori: "Local",
      },
      {
        nama: "Gempol",
        kategori: "Local",
      },
      {
        nama: "Glodokan Tiang",
        kategori: "Local",
      },
      {
        nama: "Jabon",
        kategori: "Local",
      },
      {
        nama: "Jambu Batu",
        kategori: "Local",
      },
      {
        nama: "Jambu Biji",
        kategori: "Local",
      },
      {
        nama: "Jambu Mete",
        kategori: "Local",
      },
      {
        nama: "Jengkol",
        kategori: "Local",
      },
      {
        nama: "Jeruk",
        kategori: "Local",
      },
      {
        nama: "Kalang Kala",
        kategori: "Local",
      },
      {
        nama: "Kaliandra",
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
        nama: "Ketapi",
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
        nama: "Mahoni",
        kategori: "Local",
      },
      {
        nama: "Mallotus",
        kategori: "Local",
      },
      {
        nama: "Mangga",
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
        nama: "Nyamplung",
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
        nama: "Rambutan",
        kategori: "Local",
      },
      {
        nama: "Rotan",
        kategori: "Local",
      },
      {
        nama: "Sirsak",
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
        nama: "Belimbing",
        kategori: "Non Local",
      },
      {
        nama: "Eucaliptus",
        kategori: "Non Local",
      },
      {
        nama: "Gamal",
        kategori: "Non Local",
      },
      {
        nama: "Gmelina",
        kategori: "Non Local",
      },
      {
        nama: "Gulinggang",
        kategori: "Non Local",
      },
      {
        nama: "Jarak",
        kategori: "Non Local",
      },
      {
        nama: "Jerpay",
        kategori: "Non Local",
      },
      {
        nama: "Johar",
        kategori: "Non Local",
      },
      {
        nama: "Kapuk",
        kategori: "Non Local",
      },
      {
        nama: "Karet",
        kategori: "Non Local",
      },
      {
        nama: "Kesambi",
        kategori: "Non Local",
      },
      {
        nama: "Ketapang",
        kategori: "Non Local",
      },
      {
        nama: "Mucuna cochincinesis",
        kategori: "Non Local",
      },
      {
        nama: "Pepaya",
        kategori: "Non Local",
      },
      {
        nama: "Pinang",
        kategori: "Non Local",
      },
      {
        nama: "Rumput Tifa",
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
    return queryInterface.bulkDelete("tb_jenis", {}, null);
  },
};
