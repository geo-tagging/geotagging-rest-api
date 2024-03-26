"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tb_status.hasMany(models.tb_verification, { foreignKey: "id_status" });
      tb_status.hasMany(models.tb_approve, { foreignKey: "id_status" });
    }
  }
  tb_status.init(
    {
      id_status: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tb_status",
    }
  );
  return tb_status;
};
