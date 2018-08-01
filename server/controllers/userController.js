const mongoose = require("mongoose");
const jwt = require ("jsonwebtoken");
const Todo  = require ("../models/todo")
const user = require ("../models/user")

module.exports = {

    //get todos
    getTodos: function (req,res) {
        let params = { user: req.body.userId };
        if (req.query.tag) {
            params.tags = { $in: req.query.tag }
        }
        console.log('params get todos');
        Todo
            .find (params)
            .sort ({completed: 1, createdAt: -1})
            .then (todos => {
                res.status(200).json({
                    msg: "successfully get todo list",
                    todos
                });
            })
            .catch (err => {
                if (err) { 
                    res.status(400).json(err);
                }
            })
    },

    //add todo
    addTodo: function (req,res) {
        // let userId = req.body.userId;
        // let task = req.body.task;
        // let tags = req.body.tags;

        const newTodo = {
            user: req.body.userId,
            task: req.body.task,
            tags: req.body.tags,
            completed: false
        }

        console.log(req.body);

        Todo.create(newTodo, (err, response) => {
            if(err){
                console.log(err);
            } else {
                res.status(201).json({
                    msg: "successfully add new task to do list",
                    response
                })
            }
        })
        
        // todo
        //     .create({ user: userId, task, tags })
        //     .then(todo => {
        //         user
        //             .findByIdAndUpdate (
        //                 userId,
        //                 { $push: { todos: todo._id } },
        //                 { new: true }
        //             )
        //             .then (affectedUser => {
        //                 res.status(201).json ({
        //                     msg: "successfully add new task to do list",
        //                     affectedUser,
        //                     todo
        //                 });
        //             });
        //     })
        //     .catch (err => {
        //         if (err) {
        //             res.send(err.errors);
        //         }
        //     });

    },

    // update todo
    updateTodo: function (req,res) {
        let todoId = req.params.todoId;
        let updatedTodo = req.body;
        console.log("---->",req.body)
        Todo
            .findByIdAndUpdate(todoId, { $set: updatedTodo }, { new: true })
            .then(todo => {
                let addTags = req.body.addTags;
                let removeTags = req.body.removeTags;
                if (addTags[0] !== "") {
                    for (let i = 0; i < addTags.length; i++) {
                        let tag = addTags[i];
                        todo.tags.push(tag)
                    }
                }
                if (removeTags[0] !== "") {
                    for (let i = 0; i < removeTags.length; i++) {
                        let tag = removeTags[i];
                        todo.tags.pull(tag)
                    }
                }
                todo.save().then(todo => {
                    res.status(200).json ({
                        msg: "succesfully updated todo",
                        todo
                    });
                });
            })
        .catch(err => {
            if (err) {
                res.send(err)
            }
        });
    },

    //delete todo
    deleteTodo: function (req, res) {
        let todoId = req.params.todoId;
        Todo
            .findByIdAndRemove(todoId)
            .then(todo => {
                res.status(200).json({
                    msg: "successfully removed todo from list",
                    todo
                });
            })
            .catch(err => {
                if (err) {
                    res
                    .status(400)
                    .json(err)
                }
            });
    }
    
};