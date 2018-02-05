const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove()
Todo.findOneAndRemove({_id:'5a78a8e98b736d44081ae094'}).then((todo) => {
    console.log(todo);
});
Todo.findByIdAndRemove('5a78a8e98b736d44081ae094').then((todo) => {
    console.log(todo);
});