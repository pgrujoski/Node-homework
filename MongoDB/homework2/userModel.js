const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String, 
        required: true,
    },
    age: Number,
})

module.exports = mongoose.model("User", userSchema)