"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tb_verification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tb_verification.belongsTo(models.tb_approve, {
        foreignKey: "id_tanaman",
      });
      tb_verification.belongsTo(models.tb_jenis, { foreignKey: "id_jenis" });
      tb_verification.belongsTo(models.tb_kegiatan, {
        foreignKey: "id_kegiatan",
      });
      tb_verification.belongsTo(models.tb_lokasi, { foreignKey: "id_lokasi" });
      tb_verification.belongsTo(models.tb_sk, { foreignKey: "id_sk" });
      tb_verification.belongsTo(models.tb_status, { foreignKey: "id_status" });
      tb_verification.belongsTo(models.tb_action, { foreignKey: "id_action" });
      tb_verification.belongsTo(models.tb_user, { foreignKey: "uid" });
    }
  }
  tb_verification.init(
    {
      id_verification: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_tanaman: DataTypes.INTEGER,
      id_jenis: DataTypes.INTEGER,
      id_kegiatan: DataTypes.INTEGER,
      id_lokasi: DataTypes.INTEGER,
      id_sk: DataTypes.INTEGER,
      id_status: DataTypes.INTEGER,
      diameter: DataTypes.DOUBLE,
      tinggi: DataTypes.DOUBLE,
      tanggal_tanam: DataTypes.DATE,
      date_modified: DataTypes.DATE,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
      elevasi: DataTypes.STRING,
      easting: DataTypes.STRING,
      northing: DataTypes.STRING,
      images: DataTypes.STRING,
      id_action: DataTypes.INTEGER,
      uid: DataTypes.INTEGER,
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "tb_verification",
      tableName: "tb_verification",
      hooks: {
        beforeCreate: (record, options) => {
          record.createdAt = new Date(
            new Date().getTime() + 8 * 60 * 60 * 1000
          );
          record.updatedAt = new Date(
            new Date().getTime() + 8 * 60 * 60 * 1000
          );
        },
        beforeUpdate: (record, options) => {
          record.updatedAt = new Date(
            new Date().getTime() + 8 * 60 * 60 * 1000
          );
        },
      },
    }
  );
  return tb_verification;
};
