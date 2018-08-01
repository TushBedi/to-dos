const mongoose = require("mongoose");

let Schema = mongoose.Schema

const emailValidator = function(email) {
    return /^\w([.!#$%&’*+/=?^_`{|}~-]*?\w+)+@\w+(\.\w{2,3})+$/.test(email);
  };
    

let userSchema = new Schema (
    {
        email: {
            type: String,
            required: [true, "email is required"],
            validate: [emailValidator, "invalid email type"],
        },
        password: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true
        }
        // },
        // todos: [{
        //     type: Schema.Types.ObjectId,
        //     ref: "todos",
        // }],
    }
)

module.exports = mongoose.model("user", userSchema)