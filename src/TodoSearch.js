import React from "react";
import './TodoSearch.css';

function TodoSearch(){
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    };

    return (
        <input 
            className="todo-search-input" 
            placeholder="Search a ToDo..."
            onChange={onSearchValueChange}
        />
    );
};

export { TodoSearch };