const mongoose = require("mongoose");

let Schema = mongoose.Schema

const emailValidator = function(email) {
    return /^\w([.!#$%&’*+/=?^_`{|}~-]*?\w+)+@\w+(\.\w{2,3})+$/.test(email);
  };
    

let userSchema = new Schema (
    {
        email: {
            type: String,
            required: true,
            validate: emailValidator
        },
        password: {
            type: String,
            required: true,
            validate: emailValidator
        },
        name: {
            type: String,
            required: true,
            validate: emailValidator
        },
        todos: {
            type: String,
            required: true,
            validate: emailValidator
        },
    }
)