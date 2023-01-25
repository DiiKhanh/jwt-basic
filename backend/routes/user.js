const middlewareController = require("../controllers/middlewareController");
const userController = require("../controllers/userController");

const Router = require("express").Router();

// register
Router.post("/register", userController.registerUser);
// login
Router.post("/login", userController.loginUser);
// get user
Router.get("/", middlewareController.verifyToken, userController.getAllUsers);
// refresh token
Router.get("/refresh", userController.requestRefreshToken);

module.exports = Router;
