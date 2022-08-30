const productRoute = require("express").Router();
const { ProductController } = require("../controllers");

productRoute.get("/", ProductController.getAllProducts);
productRoute.get("/:id", ProductController.getOneProduct);
productRoute.post("/", ProductController.createProduct);
productRoute.put("/:id", ProductController.update);
productRoute.delete("/:id", ProductController.delete);

module.exports = productRoute;
