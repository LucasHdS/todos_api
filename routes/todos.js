var express = require('express');

var router = express.Router();
var dataBase = require('../models');



router.get('/',function(req,res){
    dataBase.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
});

router.post('/',function(req,res){
    dataBase.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    })
});

router.get('/:todoId',function(req,res){
    dataBase.Todo.findById(req.param.todoId)
    .then(function(foundTodo){
        res.json(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    })
});

module.exports = router;