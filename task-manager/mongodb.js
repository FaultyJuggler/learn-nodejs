// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName);

    db.collection('tasks').removeMany({})

    // db.collection('tasks').deleteMany(
    //     { completed: true
    //     }).then( (result) => {
    //         console.log(result.deletedCount)
    //     }).catch((error) => {
    //         console.log(error)
    //     });
    //
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },{
    //         description: 'Renew inspection',
    //         completed: false
    //     },{
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }
    //     console.log(result.ops)
    //     });

    // const updatePromise = db.collection('tasks').updateMany(
    //     {completed: false},
    //     {
    //         $set: {
    //             completed: true
    //             }
    //         }
    //     )
    //
    // updatePromise.then( (result) =>
    // {
    //   console.log(result.modifiedCount)
    // }).catch((error) =>
    // {
    //     console.log(error)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) =>
    // {
    //     console.log(tasks)
    // })

    // db.collection('users').insertOne({
    //     name: 'Andrew',
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //
    //     console.log(result.ops)
    // })
    //
    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }
    //
    //     console.log(result.ops)
    // })
    //
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },{
    //         description: 'Renew inspection',
    //         completed: false
    //     },{
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }
    //
    //     console.log(result.ops)
    // });
})