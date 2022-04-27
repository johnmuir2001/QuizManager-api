const userService = require("./user.service");

// Handle Fail or Successful Log In
exports.authenticateUser = async (req, res, next) => {
    try {
        // Try to get user from authenticate function in service file
        const user = await userService.authenticate(req.body);
        
        // if credentials are correct send user or thorw the appropriate message
        if(user){
            res.send(user)
        } else {
            res.status(400).send({ message: "Username or Password is incorrect"})
        }
    } catch (err) {
        next(err)
    }
}