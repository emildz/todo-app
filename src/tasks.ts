import  { connectDb } from "./connectDb";
import {Request, Response } from 'express'

export const createTask = (request: Request, response: Response) => {
  console.log("request.body",request.body)
  const newTask = {
      task: request.body.task,
      done: false
  }
  const db = connectDb();
  db.collection("tasks")
    .add(newTask)
    .then((doc) => response.status(201).send(doc.id))
    .catch((err) => response.status(500).send(err));
};

export const getTasks = (request: Request, response: Response) => {
  const db = connectDb();
  db.collection("tasks")
    .get()
    .then((snapshot) => {
      const taskList =  snapshot.docs.map((doc) => {
        let task = doc.data();
        task.id = doc.id;
        return task;
      });
      response.send(taskList);
    })
    .catch((err) => response.status(500).send(err));
}
export const updateTask = (request: Request, response: Response) => {
  const { taskId } = request.params;
  const isDone = request.body.done;
  const db = connectDb();
  db.collection("tasks")
    .doc(taskId)
    .update({ done: isDone })
    .then((doc) => response.status(202).send(doc))
    .catch((err) => response.status(500).send(err));
};
