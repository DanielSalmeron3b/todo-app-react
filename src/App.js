import React from "react";
// import './App.css';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";

const defaultTodos = [
  {
    text: 'Do the laundry',
    completed: true,
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
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todos => !!todos.completed);

  return (
    <>
      <TodoCounter />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {/* ToDos registered in the app */}
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;