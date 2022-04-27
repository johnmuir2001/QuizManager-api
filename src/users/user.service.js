const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("./user.model");


// authenticate user trying to log in
exports.authenticate = async ({ username, password }) => {
    // find user with passed username
    const user = await User.findOne({ username });
    // if user is found and passed password matches user password from DB assign token
    if(user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ sub: user.id, role: user.role }, process.env.SECRET, { expiresIn: "7d" });
        return {
            ...user.toJSON(),
            token
        };
    }
}