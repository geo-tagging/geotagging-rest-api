"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_kegiatan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tb_kegiatan.hasMany(models.tb_verification, {
        foreignKey: "id_kegiatan",
      });
      tb_kegiatan.hasMany(models.tb_approve, {
        foreignKey: "id_kegiatan",
      });
    }
  }
  tb_kegiatan.init(
    {
      id_kegiatan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      kegiatan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tb_kegiatan",
      tableName: "tb_kegiatan",
    }
  );
  return tb_kegiatan;
};
