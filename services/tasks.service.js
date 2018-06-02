var Task = require('../models/task.model')

_this = this


exports.getTasks = async function(query, page, limit){
    var options = {
        page,
        limit
    }
    try {
        var todos = await Task.paginate(query, options)
        return todos;
    } catch (e) {
        throw Error('Error while Paginating Tasks')
    }
}

exports.createTask = async function(task){

    var newTask = new Task({
        id: task.id,
        title: task.title
    })

    try{
        var savedTask = await newTask.save()
        return savedTask;
    }catch(e){
        throw Error("Error while Creating Task")
    }
}