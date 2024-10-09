"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_boundary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tb_boundary.belongsTo(models.tb_petakUkur, { foreignKey: "id_petak" });
    }
  }
  tb_boundary.init(
    {
      id_boundary: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_petak: DataTypes.INTEGER,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tb_boundary",
      tableName: "tb_boundary",
    }
  );
  return tb_boundary;
};
