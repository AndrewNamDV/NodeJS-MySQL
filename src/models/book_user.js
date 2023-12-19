'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Book_User.init({
    Book_ID: DataTypes.INTEGER,
    User_ID: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Book_User',
  });
  return Book_User;
};