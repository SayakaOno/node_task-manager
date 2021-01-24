const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true
});

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    require: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    }
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
    trim: true,
    validate(value) {
      if (validator.contains(value, 'password', { ignoreCase: true })) {
        throw new Error("password cannot contain 'password'");
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a positive number');
      }
    }
  }
});

// const me = new User({
//   name: '     Sayaka   ',
//   email: 'SAYAKA@TEST.COM   ',
//   password: 'testtest123'
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch(error => console.log(error));

const Task = mongoose.model('Task', {
  description: {
    type: String,
    required: true,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const task = new Task({
  description: '      book an appointment       '
});

task
  .save()
  .then(result => console.log(result))
  .catch(error => console.log(error));
