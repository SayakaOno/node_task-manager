const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
});

const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
});

// const me = new User({ name: 'Sayaka', age: 32 });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch(error => console.log(error));

const Task = mongoose.model('Task', {
  description: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

const task = new Task({
  description: 'Cooking',
  completed: false
});

task
  .save()
  .then(result => console.log(result))
  .catch(error => console.log(error));
