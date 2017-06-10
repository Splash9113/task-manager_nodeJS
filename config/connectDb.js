let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/task_manager');
mongoose.Promise = global.Promise;

module.exports = mongoose;