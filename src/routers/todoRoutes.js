const express = require('express');
const router = express.Router();
const controller = require('../controllers/todoController')

router
    .get('/', controller.welcome)
    .get('/todo', controller.getAllTodo)
    .post('/todo', controller.createToDo)
    .put('/todo/:id', controller.updateTask)
    .delete('/todo/:id', controller.deleteTask);



module.exports = router;