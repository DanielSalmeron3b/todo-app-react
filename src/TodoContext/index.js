import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
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
    
    const [openModal, setOpenModal] = React.useState(false);
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

    const createTodo = (textWritten) => {
        const newTodos = [...todos];
        newTodos.push({
            completed: false,
            text: textWritten,
        });
        saveTodos(newTodos);
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
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            createTodo,
            markTodoAsCompleted,
            deleteATodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };