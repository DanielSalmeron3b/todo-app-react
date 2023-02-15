import React from "react";
// import './App.css';
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { CreateTodoButton } from "./CreateTodoButton";
import { TodoItem } from "./TodoItem";

/* Fake and "hardcoded" TODOs */
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

  const completedTodos = todos.filter(todos => !!todos.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    /* If search bar is empty, show all the TODOs that are registered */
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      /* Seeing if any of the TODOs in the app have the text prompted by the user
      so the filter method will return it */
      return todoText.includes(searchText);
    });
  };

  return (
    <>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {/* ToDos that are shown as a result of what did the user searched */}
        {searchedTodos.map(todo => (
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