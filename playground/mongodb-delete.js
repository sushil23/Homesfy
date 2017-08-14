const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect');
    }
    console.log('Connected To MongoDb server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: "Andrew"}).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('59917dccf8bfbf374c192488')
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});