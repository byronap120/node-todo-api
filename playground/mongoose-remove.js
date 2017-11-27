const{ObjectID} = require('mongodb');

const {moongose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('5a1b7c9fc58716ce7ff43759').then((todo) => {
  console.log(todo);
});
