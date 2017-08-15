const express = require('express');
const expressGraphQL = require('express-graphql');
const path = require('path');

const {mongoose} = require('./db/mongoose');
const schema = require('./schema/schema');

const app = express();
app.use(express.static(path.resolve(__dirname, './../client/public')));

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(3000, () => {
    console.log("Server started on port 3000");
});