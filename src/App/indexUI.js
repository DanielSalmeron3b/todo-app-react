import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoContext } from "../TodoContext";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";

function AppUI() {
    return (
        <>
            {/* Not sending props anymore since now we have a context with providers and consumers */}
            <TodoCounter />
            <TodoSearch />
            <TodoContext.Consumer>
                {({
                    error, 
                    loading,
                    searchedTodos,
                    markTodoAsCompleted,
                    deleteATodo
                }) => (
                    <TodoList>
                        {error && <p>There was an error :(</p>}
                        {loading && <p>Loading...</p>}
                        {(!loading && !searchedTodos.length && !error) && <p>Make your first TODO.</p>}
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
                )}
            </TodoContext.Consumer>
            <CreateTodoButton />
        </>
    );
}

export { AppUI };