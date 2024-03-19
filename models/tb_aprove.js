'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aprove extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Aprove.init({
    id_jenis: DataTypes.INTEGER,
    id_kegiatan: DataTypes.INTEGER,
    id_lokasi: DataTypes.INTEGER,
    id_sk: DataTypes.INTEGER,
    tanggal_tanam: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    elevasi: DataTypes.STRING,
    images: DataTypes.STRING,
    date_modified: DataTypes.STRING,
    verification: DataTypes.STRING,
    kondisi: DataTypes.STRING,
    uid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Aprove',
  });
  return Aprove;
};