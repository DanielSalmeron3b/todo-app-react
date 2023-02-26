import React from "react";
// import './App.css';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    markTodoAsCompleted,
    deleteATodo,
}) {
    return (
        <>
            {/* Sending props to the 'TodoCounter' component */}
            <TodoCounter
                total={totalTodos}
                completed={completedTodos}
            />
            {/* Sending props to the 'TodoSearch' component */}
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>
                {/* TODOs that are shown as a result of what did the user searched */}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => markTodoAsCompleted(todo.text)}
                        onDelete={() => deleteATodo(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton />
        </>
    );
}

export { AppUI };