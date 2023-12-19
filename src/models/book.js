'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Book.init({
    ID: DataTypes.INTEGER,
    Title: DataTypes.STRING,
    PublishDate: DataTypes.DATE,
    Quantity: DataTypes.INTEGER,
    Price: DataTypes.DECIMAL,
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};