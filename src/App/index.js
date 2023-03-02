import React from "react";
import { AppUI } from "./indexUI";


/* Custom Hook to save data in localStorage */
function useLocalStorage(itemName, initialValue) {
  // Error state
  const [error, setError] = React.useState(false);
  // Loading state
  const [loading, setLoading] = React.useState(true);
  // initialValue is the initial state now
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    // Using setTimeout to preten that we are receiving info from an API and that we
    // have to wait for the request to complete
    setTimeout(() => {
      try {
        // If u want to see how the error state works, uncomment the line below
        // throw new Error()
        // Bringing the item (received as a parameter) saved in localStorage, it can be the list of TODOs
        // or other item saved in localStorage
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          // If the user is new in the app, then there will be nothing on localStorage
          // so we save an item in localStorage as an empty array
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          // And the default state will be also an empty array
          parsedItem = initialValue;
        } else {
          // If there are TODOs saved in localStorage then these are converted to JSON
          parsedItem = JSON.parse(localStorageItem);
        };

        // The state is now the "response" from what was saved in localStorage
        setItem(parsedItem);
        // The loading state finished now that we received a "response" from localStorage
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 2000);
  }, [initialValue, itemName]);


  const saveItemInLocalStorage = (newItem) => {
    try {
      // Saving the changes in localStorage    
      const stringUpdatedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringUpdatedItem);
      // Setting a new state
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  // Returning the state (item), and the function that modifies the state (saveItemInLocalStorage)
  // Also returning the loading and error state
  return {
    item,
    saveItemInLocalStorage,
    loading,
    error,
  };
}


function App() {
  // Using the custom hook, saving the TODOs in an item called 'TODOS_V1' in the localStorage
  const {
    item: todos,
    saveItemInLocalStorage: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  // The searchValue is nothing by default, until the user searches for a TODO by typing
  // something in the search bar
  const [searchValue, setSearchValue] = React.useState('');

  // Getting the quantity of TODOs that are completed
  const completedTodos = todos.filter(todos => !!todos.completed).length;

  // Getting the quantity of all TODOs
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
    // Saving the todo in localStorage
    saveTodos(newTodos);
  };


  const deleteATodo = (text) => {
    // Searching the index of the todo that has the same text as the one we receive as a parameter
    const todoIndex = todos.findIndex(todo => todo.text === text);
    // Creating a new list of todos based on the original 'todos' list
    const newTodos = [...todos];
    // Deleting the todo from the array
    newTodos.splice(todoIndex, 1);
    // Saving the todo in localStorage
    saveTodos(newTodos);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
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