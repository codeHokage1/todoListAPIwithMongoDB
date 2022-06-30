const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
    title: {
        type: 'string',
        required: true
    },
    description: {
        type: 'string',
        required: true
    }
}, { timestamps: true });


const toDoModel = model('todoList', todoSchema);
module.exports = toDoModel;
