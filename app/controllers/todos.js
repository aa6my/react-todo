import Todo from '../models/todo';
import moment from 'moment';

export const index = (req, res, next) => {
  // Find all todos and return json response
  Todo.find().lean().exec((err, todos) => res.json(
    // Iterate through each todo
    { todos: todos.map(todo => ({
      ...todo
    }))}
  ));
};