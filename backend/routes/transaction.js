const transactionRoute = require("express").Router();
const { TransactionController } = require("../controllers");
const authentication = require("../middlewares/auth");

transactionRoute.get("/", TransactionController.getAllTransactions);
transactionRoute.get("/:id", TransactionController.getOneTransaction);
transactionRoute.post("/", authentication, TransactionController.order);
transactionRoute.put("/:id", authentication, TransactionController.update);
transactionRoute.delete("/:id", TransactionController.delete);

module.exports = transactionRoute;
