import { Router } from "express";
import { Todo } from "../models/todo";

const router = Router();

let todos: Todo[] = [];

router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});

router.post("/todo", (req, res) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.text,
  };
  todos.push(newTodo);
  res.status(201).json({ message: "Updated todo", todos: todos });
});

router.put("/todo/:todoId", (req, res) => {
  const tid = req.params.todoId;
  const todoIndex = todos.findIndex((todoItem) => {
    todoItem.id === tid;
  });
  if (todoIndex >= 0) {
    todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
  }
  res.status(404).json({ message: "Could not find todo for this id." });
});

router.delete("todo/:todoId", (req, res) => {
    todos = todos.filter((todoItem)=>{
        todoItem.id!==req.body.todoId;
    })
    res.status(200).json({mesage:'Deleted todo', todos:todos})
});

export default router;
