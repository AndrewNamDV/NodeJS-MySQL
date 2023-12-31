'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Author.init({
    ID: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    BirthofDate: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};