const mongoose = require('mongoose');

var Book = mongoose.model('Book', {
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    author: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    isAvailable: {
        type: Boolean,
        default: true
    }
});

module.exports = {Book};