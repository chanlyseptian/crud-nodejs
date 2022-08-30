const { Transaction, Product } = require("../models");

class TransactionController {
  static async getAllTransactions(req, res) {
    try {
      const transactions = await Transaction.findAll({
        order: [["updatedAt", "desc"]],
      });

      if (transactions) {
        res
          .status(200)
          .json({ ResponseCode: "00", ResponseDesc: transactions });
      } else {
        res
          .status(404)
          .json({ ResponseCode: "01", ResponseDesc: transactions });
      }
    } catch (error) {
      res.status(500).json({ ResponseCode: "01", message: error.message });
    }
  }

  static async getOneTransaction(req, res) {
    try {
      const id = +req.userData.id;
      const transaction = await Transaction.findOne({
        where: { id: id },
      });

      if (transaction) {
        res.status(200).json({ ResponseCode: "00", ResponseDesc: transaction });
      } else {
        res.status(404).json({ ResponseCode: "01", ResponseDesc: transaction });
      }
    } catch (error) {
      res.status(500).json({ ResponseCode: "01", message: error.message });
    }
  }

  static async order(req, res) {
    try {
      const userId = +req.userData.id;
      const { ProductId, qtyOrder } = req.body;

      const premiumProduct = await Product.findOne({
        where: { id: ProductId },
      });

      const totalOrder = qtyOrder * premiumProduct.premium;

      const result = await Transaction.create({
        transactionDate: new Date(),
        UserId: userId,
        ProductId,
        qtyOrder,
        totalOrder: totalOrder,
      });

      if (result) {
        res.status(200).json({ ResponseCode: "00", ResponseDesc: `Total Order : Rp.${result.totalOrder}`, Data: result });
      } else {
        res.status(404).json({ ResponseCode: "01", ResponseDesc: result });
      }
    } catch (error) {
      res.status(500).json({ ResponseCode: "01", message: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      const result = await Transaction.destroy({
        where: { id },
      });

      if (result === 1) {
        res.status(200).json({
          ResponseCode: "00",
          message: `transaction has been deleted`,
        });
      } else {
        res
          .status(404)
          .json({ ResponseCode: "01", message: `id is not found` });
      }
    } catch (error) {
      res.status(500).json({ ResponseCode: "01", message: error.message });
    }
  }

  static async update(req, res) {
    try {
      const userId = +req.userData.id;
      const transId = +req.params.id;
      const { transactionDate, ProductId, qtyOrder, totalOrder } = req.body;
      const result = await Transaction.update(
        {
          transactionDate,
          UserId: userId,
          ProductId,
          qtyOrder,
          totalOrder,
        },
        {
          where: { id: transId },
        }
      );

      if (result[0] === 1) {
        res
          .status(200)
          .json({ ResponseCode: "00", message: `user has been updated` });
      } else {
        res
          .status(404)
          .json({ ResponseCode: "01", message: `id is not right` });
      }
    } catch (error) {
      res.status(500).json({ ResponseCode: "01", message: error.message });
    }
  }
}

module.exports = TransactionController;
