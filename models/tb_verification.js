'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tb_verification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tb_verification.init({
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
    uid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tb_verification',
  });
  return tb_verification;
};