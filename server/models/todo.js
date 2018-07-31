const mongoose = require("mongoose");

let Schema = mongoose.Schema

let todoSchema = new Schema (
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "users"
        },
        task: {
            type: String,
            required: [true, "task is required"],
        },
        completed: {
            type: Boolean,
            required: true,
            default: 0
        },
        tags: {
            type: Array,
            default: []
        },
    }
)