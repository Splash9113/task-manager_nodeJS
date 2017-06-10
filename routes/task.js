var express = require('express');
var router = express.Router();
var taskController = new (require('../controllers/taskController'))();

/* GET all tasks. */
router.get('/all', taskController.getAll);

/* GET one task. */
router.get('/:id', taskController.get);

/* POST store new task. */
router.post('/', taskController.store);

/* PUT update an existing task. */
router.put('/:id', taskController.update);

/* DELETE remove an existing task. */
router.delete('/:id', taskController.remove);

module.exports = router;
