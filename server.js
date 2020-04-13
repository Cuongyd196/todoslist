import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import  mongoose from 'mongoose';
import {todoRouter} from './src/todo.router';

const  PORT = 4000;
const  app = express();
app.use( cors());
app.use(bodyParser.json());
app.use('/api/todos', todoRouter);
mongoose.connect('mongodb://localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&3t.uriVersion=3&3t.connection.name=todolist');

mongoose.connection.once('open', function () {
    console.log("Connection mongodb success");

})

app.listen(PORT, function () {
    console.log(" Server is running on Port : ", PORT);
})


