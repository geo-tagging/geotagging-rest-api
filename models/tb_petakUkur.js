"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_petakUkur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tb_petakUkur.hasMany(models.tb_boundary, { foreignKey: "id_petak" });
      tb_petakUkur.hasMany(models.tb_verification, { foreignKey: "id_petak" });
      tb_petakUkur.hasMany(models.tb_approve, { foreignKey: "id_petak" });
    }
  }
  tb_petakUkur.init(
    {
      id_petak: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      petak_ukur: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tb_petakUkur",
      tableName: "tb_petakUkur",
    }
  );
  return tb_petakUkur;
};
