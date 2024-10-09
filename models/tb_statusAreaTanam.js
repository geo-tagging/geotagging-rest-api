"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_statusAreaTanam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tb_statusAreaTanam.hasMany(models.tb_verification, {
        foreignKey: "id_statusAreaTanam",
      });
      tb_statusAreaTanam.hasMany(models.tb_approve, {
        foreignKey: "id_statusAreaTanam",
      });
    }
  }
  tb_statusAreaTanam.init(
    {
      id_statusAreaTanam: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      status_areaTanam: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tb_statusAreaTanam",
      tableName: "tb_statusAreaTanam",
    }
  );
  return tb_statusAreaTanam;
};
