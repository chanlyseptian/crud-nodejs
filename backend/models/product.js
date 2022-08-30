"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasMany(models.Transaction);
    }
  }
  Product.init(
    {
      productName: DataTypes.STRING,
      premium: DataTypes.FLOAT,
    },
    {
      hooks: {
        beforeCreate: function (user, options) {
          user.premium = +user.premium;
        },
      },
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
