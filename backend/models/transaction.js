'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.User);
      Transaction.belongsTo(models.Product);
    }
  }
  Transaction.init({
    transactionDate: DataTypes.DATE,
    UserId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    qtyOrder: DataTypes.INTEGER,
    totalOrder: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};