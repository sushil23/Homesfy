const mongoose = require('mongoose');

var User = mongoose.model('User', {
    userName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    contactNumber: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10,
        trim: true
    }
});

module.exports = {User};