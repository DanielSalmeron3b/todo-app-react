import React from "react";
import { AppUI } from "./indexUI";

// Fake and "hardcoded" TODOs
// const defaultTodos = [
//   {
//     text: 'Do the laundry',
//     completed: true,
//   },
//   {
//     text: 'Do the React Course at Platzi',
//     completed: false,
//   },
//   {
//     text: 'Llorar con la llorona',
//     completed: false,
//   },
//   {
//     text: 'Pet the dog',
//     completed: false,
//   }
// ]

function App() {
  // Bringing all the TODOs saved in localStorage
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if(!localStorageTodos){
    // If the user is new in the app, then there will be nothing on localStorage
    // so we save an item in localStorage as an empty array
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    // And the default state will be also an empty array
    parsedTodos = [];
  } else {
    // If there are TODOs saved in localStorage then these are converted to JSON
    parsedTodos = JSON.parse(localStorageTodos);
  };

  const [todos, setTodos] = React.useState(parsedTodos);
  // The searchValue is nothing by default, until the user searches a TODO
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
    // Saving the changes in localStorage
    console.log('newTodos', newTodos);
    const stringUpdatedTodos = JSON.stringify(newTodos);
    console.log('stringUpdatedTodos', stringUpdatedTodos);
    localStorage.setItem('TODOS_V1', stringUpdatedTodos);
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
    // Saving the changes in localStorage
    console.log('newTodos', newTodos);
    const stringUpdatedTodos = JSON.stringify(newTodos);
    console.log('stringUpdatedTodos', stringUpdatedTodos);
    localStorage.setItem('TODOS_V1', stringUpdatedTodos);
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