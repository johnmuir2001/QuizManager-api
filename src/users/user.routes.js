const express = require("express");
const userRouter = express.Router();
const {
    authenticateUser
} = require("./user.controller");


// user routes
userRouter.post("/authenticate", authenticateUser) // User Log In
userRouter.post("/register", register) // Add New User