const mongoose = require('mongoose');

const userdata = mongoose.Schema({
    name: String,
    email: String,
    exercise: String,
    date: String,
    duration: String,
    img:
    {
        data: Buffer,
        contentType: String
    }

});

var user = mongoose.model('proj', userdata);
module.exports = user;