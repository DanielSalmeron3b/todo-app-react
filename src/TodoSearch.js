import React from "react";
import './TodoSearch.css';

function TodoSearch(){
    const [patito, setPatito] = React.useState('Juan');

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
    };

    return [
        <input
            className="todo-search-input" 
            placeholder="Search a ToDo..."
            onChange={() => setPatito('Daninel')}
        />,
        <p>{patito}</p>
    ];
};

export { TodoSearch };