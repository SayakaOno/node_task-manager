const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users').findOne(
    //   { _id: new ObjectID('600da156cd173bb697164368') },
    //   (error, user) => {
    //     if (error) {
    //       return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection('users')
    //   .find({ age: 32 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    db.collection('tasks').findOne(
      {
        _id: new ObjectID('600d9f1a42cf1ea239ee436c')
      },
      (error, task) => {
        console.log(task);
      }
    );

    db.collection('tasks')
      .find({ completed: false })
      .toArray((error, tasks) => {
        console.log(tasks);
      });
  }
);
