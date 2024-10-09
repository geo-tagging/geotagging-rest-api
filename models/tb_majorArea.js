"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_majorArea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tb_majorArea.hasMany(models.tb_lokasi, { foreignKey: "id_major" });
    }
  }
  tb_majorArea.init(
    {
      id_major: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      instansi: DataTypes.STRING,
      counter: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "tb_majorArea",
      tableName: "tb_majorArea",
    }
  );
  return tb_majorArea;
};
