const mongoose = require("mongoose");

let Schema = mongoose.Schema

let todoSchema = new Schema (
    {
        user: { type: Schema.Types.ObjectId, ref: 'user' },
        task: { type:String },
        completed: false,
        tags: [],
    }, {
        timestamps: true
    }
)

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo