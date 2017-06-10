let mongoose = require('../config/connectDb');

var task = new mongoose.Schema({
    title:  String,
    body:   String,
    active: Boolean
});

module.exports = mongoose.model('Task', task);