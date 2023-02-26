import React from "react";
import { AppUI } from "./indexUI";

// Fake and "hardcoded" TODOs
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
    // If search bar is empty, show all the TODOs that are registered
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      // Seeing if any of the TODOs in the app have the text prompted by the user
      // so the filter method will return it
      return todoText.includes(searchText);
    });
  };

  const markTodoAsCompleted = (text) => {
    // Searching the index of the todo that has the same text as the one we receive as a parameter
    const todoIndex = todos.findIndex(todo => todo.text === text);
    // Creating a new list of todos based on the original 'todos' list
    const newTodos = [...todos];
    // Marking the todo as completed
    newTodos[todoIndex].completed = true;
    // Updating the state
    setTodos(newTodos);
  };

  const deleteATodo = (text) => {
    // Searching the index of the todo that has the same text as the one we receive as a parameter
    const todoIndex = todos.findIndex(todo => todo.text === text);
    // Creating a new list of todos based on the original 'todos' list
    const newTodos = [...todos];
    // Deleting the todo from the array
    newTodos.splice(todoIndex, 1);
    // Updating the state
    setTodos(newTodos);
  };

  return (
    // Sending the props to the 'AppUI' component
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      markTodoAsCompleted={markTodoAsCompleted}
      deleteATodo={deleteATodo}
    />
  );
}

export default App;