const mongoose = require("mongoose");
const Role = require("../_helpers/role");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: Role.User
    }
});

module.exports = mongoose.model('User', userSchema);