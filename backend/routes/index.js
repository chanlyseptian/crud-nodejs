const route = require("express").Router();

route.get("/api", (req, res) => {
  res.status(200).json({ message: `It's working` });
});

const userRoute = require("./user");
const productRoute = require("./product");
const transactionRoute = require("./transaction");

route.use("/api/users", userRoute);
route.use("/api/products", productRoute);
route.use("/api/transactions", transactionRoute);

module.exports = route;
