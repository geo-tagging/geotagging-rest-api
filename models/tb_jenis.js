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
      tb_jenis.hasMany(models.tb_verification, { foreignKey: "id_jenis" });
      tb_jenis.hasMany(models.tb_approve, { foreignKey: "id_jenis" });
    }
  }
  tb_jenis.init(
    {
      id_jenis: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama: DataTypes.STRING,
      kategori: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tb_jenis",
      tableName: "tb_jenis",
    }
  );
  return tb_jenis;
};
