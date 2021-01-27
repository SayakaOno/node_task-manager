require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('600dc1defe32e3176f3f63b3')
//   .then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => console.log(result))
//   .catch(e => console.log(e));

const deleteTaskAndCount = async id => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('600dcbfb1c135a731d4d26be')
  .then(result => console.log(result))
  .catch(e => console.log(e));
