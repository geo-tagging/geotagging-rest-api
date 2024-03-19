"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_jenis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_jenis.init(
    {
      nama: DataTypes.STRING,
      kategori: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tb_jenis",
    }
  );
  return tb_jenis;
};
