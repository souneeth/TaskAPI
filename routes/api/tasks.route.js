var express = require('express')

var router = express.Router()

var TaskController = require('../../controllers/tasks.controller');

router.get('/', TaskController.getTasks)
router.post('/', TaskController.createTask)

module.exports = router;