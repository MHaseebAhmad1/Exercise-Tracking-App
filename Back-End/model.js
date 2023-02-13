const mongoose = require('mongoose');

const userdata = mongoose.Schema({
    id: String,
    name: String,
    email: String,
    phone: String,
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