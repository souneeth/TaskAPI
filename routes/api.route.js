var express = require('express')

var router = express.Router()
var tasks = require('./api/tasks.route')


router.use('/tasks', tasks);


module.exports = router;