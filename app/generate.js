import mongoose from 'mongoose';
import Todo from './models/todo';

const todos = [
    {
        name: 'Create Cordova',
    },
    {
        name: 'Generate API',
    },
    {
        name: 'RESTFul Middleware',
    },
    {
        name: 'Swagger Docs',
    },
    {
        name: 'Fix Bugs inline',
    },
    {
        name: 'License Expired',
    },
    {
        name: 'Install Entity Framework',
    },
    {
        name: '.NET CORE fix on ubuntu',
    },
];

/**
 * Connection to mongodb
 */
mongoose.connect('mongodb://localhost/todo');

/**
 * getting through each task/todo
 */
todos.map(data => {
    /**
     * init data
     */
    const todo = new Todo(data);
    /**
     * saving data
     */
    todo.save();
});