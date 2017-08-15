const mongoose = require('mongoose');

var Transaction = mongoose.model('Transaction', {
    userId: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    bookId: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    dueDate: {
        type: Date,
    },
    isBorrow: {
        type: Boolean,
        default: true
    }

});

module.exports = {Transaction};