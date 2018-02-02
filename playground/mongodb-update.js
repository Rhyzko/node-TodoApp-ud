const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to Mongodb server');
    }
    console.log('Connected to MongoDb server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5a73861220c4f433122cf5f2')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //         returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        name: 'Valou'
    }, {
        $set: {
            name: 'Valentin'
        },
        $inc: {age:1}
    }, {
            returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    
    //db.close();
});