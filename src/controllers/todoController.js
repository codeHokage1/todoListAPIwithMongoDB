const Lists = require('../models/todoModels');

// homepage
exports.welcome = (req, res) => {
    res.send('Hey there. Welcome to the ToDo App!');
}

// get all items in todo list
exports.getAllTodo = async (req, res) => {
    try {
        let list = await Lists.find();
        res.status(200).json({ sucess: true, message: "List of todo", list });
    } catch (error) {
        res.status(500).json({ sucess: false, message: error.message });
    }
}

// create/add a todo task
exports.createToDo = async (req, res) => {
    try {
        let task = await req.body;
        const newTask = await Lists.create(task);
        if (newTask) {
            return res.status(201).json({ sucess: true, message: "Task created successfully", newTask })
        }
        res.status(400).json({ sucess: false, message: "Task creation failed" })
    } catch (error) {
        res.status(500).json({ sucess: false, message: error.message });
    }
}


// update a todo task
exports.updateTask = async (req, res) => {
    try {
        console.log(req.params)
        const taskToUpdate = await req.params;
        const updateDetails = await req.body;
        const foundTask = await Lists.findByIdAndUpdate(taskToUpdate.id, updateDetails, { new: true });
        if (foundTask) {
            return res.status(200).json({ sucess: true, message: "Task Updated", foundTask })
        }
        res.status(404).json({ sucess: false, message: "Task not found" })
    } catch (error) {
        res.status(500).json({ sucess: false, message: error.message });
    }
}


// delete a todo task
exports.deleteTask = async (req, res) => {
    try {
        const taskToDelete = await req.params;
        const foundTask = await Lists.findByIdAndRemove(taskToDelete.id);
        if (foundTask) {
            return res.status(200).json({ sucess: true, message: "Task deleted", foundTask })
        }
        res.status(404).json({ sucess: false, message: "Task not found" })
    } catch (error) {
        res.status(500).json({ sucess: false, message: error.message });
    }
}