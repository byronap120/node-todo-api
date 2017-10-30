var {mongoose} = require('./db/mongoose');


var newUser = new User({
  email: 'test@gmail.com'
})

newUser.save().then((doc) => {
  console.log('Save User', doc);
}, (e) => {
  console.log(e);
})

// var newTodo = new Todo({
//   text: 'Cook dinner',
//   completed: true,
//   completedAt: 5
// });
//
// newTodo.save().then((doc) => {
//   console.log('Save todo', doc);
// }, (e) => {
//   console.log(e);
// });
