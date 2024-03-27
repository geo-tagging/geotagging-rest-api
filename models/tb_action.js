"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_action extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tb_action.hasMany(models.tb_verification, { foreignKey: "id_action" });
      tb_action.hasMany(models.tb_approve, { foreignKey: "id_action" });
    }
  }
  tb_action.init(
    {
      id_action: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      action: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tb_action",
      tableName: "tb_action",
    }
  );
  return tb_action;
};
