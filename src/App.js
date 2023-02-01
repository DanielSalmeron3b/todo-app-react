import React from "react";
// import './App.css';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";

const todos = [
  {
    text: 'Do the laundry',
    completed: false,
  },
  {
    text: 'Do the React Course at Platzi',
    completed: false,
  },
  {
    text: 'Llorar con la llorona',
    completed: false,
  },
  {
    text: 'Pet the dog',
    completed: false,
  }
]

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
      {/* ToDos registered in the app */}
        {todos.map(todo =>(
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
  
      <CreateTodoButton />
    </>
    );
}

export default App;