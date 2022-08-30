const { Product } = require("../models");

class ProductController {
  static async getAllProducts(req, res) {
    try {
      const products = await Product.findAll({
        order: [["updatedAt", "desc"]],
      });

      if (products) {
        res.status(200).json({ ResponseCode: "00", ResponseDesc: products });
      } else {
        res.status(404).json({ ResponseCode: "01", ResponseDesc: products });
      }
    } catch (error) {
      res.status(500).json({ ResponseCode: "01", message: error.message });
    }
  }

  static async getOneProduct(req, res) {
    try {
      const id = +req.params.id;
      const product = await Product.findOne({
        where: { id },
      });

      if (product) {
        res.status(200).json({ ResponseCode: "00", ResponseDesc: product });
      } else {
        res.status(404).json({ ResponseCode: "01", ResponseDesc: product });
      }
    } catch (error) {
      res.status(500).json({ ResponseCode: "01", message: error.message });
    }
  }

  static async createProduct(req, res) {
    try {
      const { productName, premium } = req.body;
      const result = await Product.create({
        productName,
        premium,
      });

      if (result) {
        res.status(200).json({ ResponseCode: "00", ResponseDesc: result });
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
      const result = await Product.destroy({
        where: { id },
      });

      if (result === 1) {
        res
          .status(200)
          .json({ ResponseCode: "00", message: `product has been deleted` });
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
      const id = +req.params.id;
      const { productName, premium } = req.body;
      const result = await Product.update(
        {
          productName,
          premium,
        },
        {
          where: { id },
        }
      );

      if (result[0] === 1) {
        res
          .status(200)
          .json({ ResponseCode: "00", message: `product has been updated` });
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

module.exports = ProductController;
