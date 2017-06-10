let mongoose = require('mongoose');
let TaskModel = mongoose.model('Task');

module.exports = class taskController {

    getAll(req, res, next) {
        TaskModel.find()
            .then((result) => {
                let data = {
                    result: 'OK',
                    tasks: result
                };
                res.json(data);
            });
    }

    get(req, res, next) {
        TaskModel.findById(req.params.id)
            .then((result) => {
                let data = {
                    result: 'OK',
                    task: result
                };
                res.json(data);
            });
    }

    store(req, res, next) {
        let task = new TaskModel(req.body);
        task.save();
        let data = {
            result: 'OK',
            task: 'Stored task',
            body: task
        };
        res.json(data);
    }

    update(req, res, next) {
        TaskModel.findById(req.params.id)
            .then((result) => {
                result.title = req.body.title;
                result.body = req.body.body;
                result.active = req.body.active;
                result.save();
                let data = {
                    result: 'OK',
                    task: result
                };
                res.json(data);
            });
    }

    remove(req, res, next) {
        TaskModel.findById(req.params.id).remove()
            .then((result) => {
                let data = {
                    result: 'OK',
                    task: result
                };
                res.json(data);
            });
    }
}