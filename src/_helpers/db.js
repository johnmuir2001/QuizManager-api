const mongoose = require("mongoose");

const connection = async (uri) => {
    try {
        await mongoose.connect(uri);
        return "Successfully Connected"
    } catch (err) {
        return { err }
    }
}

module.exports = connection