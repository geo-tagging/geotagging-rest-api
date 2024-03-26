"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tb_user.hasMany(models.tb_verification, { foreignKey: "uid" });
      tb_user.hasMany(models.tb_approve, { foreignKey: "uid" });
    }
  }
  tb_user.init(
    {
      uid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      email: DataTypes.STRING,
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "tb_user",
    }
  );
  return tb_user;
};
