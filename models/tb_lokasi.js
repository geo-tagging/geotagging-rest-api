"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_lokasi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tb_lokasi.hasMany(models.tb_verification, { foreignKey: "id_lokasi" });
      tb_lokasi.hasMany(models.tb_approve, { foreignKey: "id_lokasi" });
    }
  }
  tb_lokasi.init(
    {
      id_lokasi: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      lokasi: DataTypes.STRING,
      region: DataTypes.STRING,
      kecamatan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tb_lokasi",
      tableName: "tb_lokasi",
    }
  );
  return tb_lokasi;
};
