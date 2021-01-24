const { MongoClient, ObjectID } = require('mongodb');

const id = new ObjectID();
console.log(id.id);
console.log(id.getTimestamp());
console.log(id.toHexString().length);

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

    db.collection('users').insertOne(
      {
        name: 'Vikram',
        age: 32
      },
      (error, result) => {
        if (error) {
          return console.log('Unable to insert user');
        }

        console.log(result.ops);
      }
    );

    db.collection('users').insertMany(
      [{ name: 'Jen', age: 28 }, { name: 'Gunteher', age: 27 }],
      (error, result) => {
        if (error) {
          return console.log(error);
        }
        console.log(result.ops);
      }
    );

    db.collection('tasks').insertMany(
      [
        { description: 'cleaning', completed: false },
        { description: 'cooking', completed: false },
        { description: 'studyin', completed: true }
      ],
      (error, result) => {
        if (error) {
          return console.log('Unable to insert tasks!');
        }

        console.log(result.ops);
      }
    );
  }
);
