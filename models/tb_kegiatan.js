"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_ extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_.init(
    {
      kegiatan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tb_kegiatan",
    }
  );
  return tb_;
};
