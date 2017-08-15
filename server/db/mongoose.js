const mongoose = require('mongoose');

mongoose.promise = global.Promise;
mongoose.connect('mongodb://sushil:sushil@ds157342.mlab.com:57342/librarysystem', {
    useMongoClient: true
});

module.exports = {mongoose};