"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_skKerja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tb_skKerja.hasMany(models.tb_verification, {
        foreignKey: "id_skKerja",
      });
      tb_skKerja.hasMany(models.tb_approve, {
        foreignKey: "id_skKerja",
      });
    }
  }
  tb_skKerja.init(
    {
      id_skKerja: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      sk_kerja: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tb_skKerja",
      tableName: "tb_skKerja",
    }
  );
  return tb_skKerja;
};
