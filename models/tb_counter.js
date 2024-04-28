"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_counter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_counter.init(
    {
      count: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "tb_counter",
      tableName: "tb_counter",
    }
  );
  return tb_counter;
};
