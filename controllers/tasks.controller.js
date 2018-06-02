var TasksService = require('../services/tasks.service')

_this = this


exports.getTasks = async function(req, res, next){

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 

    console.log(page, limit)

    try{
        var tasks = await TasksService.getTasks({}, page, limit)
        return res.status(200).json(tasks.docs);
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createTask = async function(req, res, next){
    var task = {
        id: req.body.id,
        title: req.body.title        
    }

    try{
        var createdTask = await TasksService.createTask(task)
        return res.status(201).json({status: 201, data: createdTask, message: "Succesfully Created Task"})
    }catch(e){
        return res.status(400).json({status: 400, message: "Task Creation was Unsuccesfull"})
    }
}