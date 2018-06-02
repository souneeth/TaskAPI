var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var TaskSchema = new mongoose.Schema({
    id: String,
    title: String
})

TaskSchema.plugin(mongoosePaginate)
const Task = mongoose.model('Task', TaskSchema)

module.exports = Task;