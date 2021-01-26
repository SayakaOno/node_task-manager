require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('600dc1defe32e3176f3f63b3')
  .then(task => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then(result => console.log(result))
  .catch(e => console.log(e));
