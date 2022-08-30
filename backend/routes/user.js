const userRoute = require("express").Router();
const { UserController } = require("../controllers");
const authentication = require("../middlewares/auth");

userRoute.get("/", UserController.getAllUsers);
userRoute.get("/detail", authentication, UserController.getOneUser);
userRoute.post("/register", UserController.registerUser);
userRoute.post("/login", UserController.login);
userRoute.put("/", authentication, UserController.update);
userRoute.delete("/:id", UserController.delete);

module.exports = userRoute;
