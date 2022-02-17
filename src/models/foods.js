'use strict';
const {
  Model
} = require('sequelize');
const kategori = require('./kategori');
module.exports = (sequelize, DataTypes) => {
  class foods extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.kategori, {
        foreignKey: 'kategori',
        as: 'kategoris',
      })
    }
  }
  foods.init({
    nama: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    kategori: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'foods',
  });
  return foods;
};