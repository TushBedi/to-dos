const mongoose = require("mongoose");

let schema = mongoose.Schema

let todoSchema = new Schema (
    {
        todo: {
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