"use strict";

const { encryptPass } = require("../helpers/bcrypt");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Transaction);
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      active: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      hooks: {
        beforeCreate: function (user, options) {
          user.password = encryptPass(user.password);
          user.active = +user.active;
        },
        beforeUpdate: function (user, options) {
          user.password = encryptPass(user.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
