"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_sk extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tb_sk.hasMany(models.tb_verification, { foreignKey: "id_sk" });
      tb_sk.hasMany(models.tb_approve, { foreignKey: "id_sk" });
    }
  }
  tb_sk.init(
    {
      id_sk: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      skppkh: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tb_sk",
      tableName: "tb_sk",
    }
  );
  return tb_sk;
};
