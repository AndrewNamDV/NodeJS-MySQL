'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    ID:DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Password: DataTypes.STRING,
    BirthofDate: DataTypes.DATE,
    Role_ID: DataTypes.STRING,
    Phone: DataTypes.CHAR(11),
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};