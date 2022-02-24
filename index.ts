import express from 'express'
import cors from  'cors'
import  {getTasks, createTask, updateTask} from './src/tasks';
const PORT = process.env.PORT || 3000;


const app = express() 
app.use(cors());
app.use(express.json());

//Routes
app.post('/tasks',createTask);
app.get('/tasks',getTasks);
app.patch('/tasks/:taskId',updateTask);



app.listen(PORT, () => {
    console.log('Listening on Port: ', PORT)
});