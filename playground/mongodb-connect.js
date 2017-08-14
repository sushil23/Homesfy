const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect');
    }
    console.log('Connected To MongoDb server');

    // db.collection('Todos').insertOne({
    //     text: "Something2",
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: "Andrew",
        age: 25
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close();
});