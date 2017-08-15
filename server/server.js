const express = require('express');
const path = require('path');

const {mongoose} = require('./db/mongoose');
const {Book} = require('./models/book');
const {User} = require('./models/user');

const app = express();
app.use(express.static(path.resolve(__dirname, './../client/public')));

app.listen(3000, () => {
    console.log("Server started on port 3000");
});