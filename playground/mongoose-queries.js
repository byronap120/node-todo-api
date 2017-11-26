const{ObjectID} = require('mongodb');

const {moongose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a1b0262f7ff1031f5822c0b';

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => {
//   console.log(e);
// });

var user_id = '5a1b08f1d32af74d49767525';

User.findById(user_id).then((user) => {
  if (!user) {
    return console.log('user not found');
  }

  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {
  console.log(e);
});
