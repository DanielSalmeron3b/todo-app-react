import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(){
    const onClickButton = (msg) => {
        alert(msg);
    };

    return (
        <button 
            className="create-todo-button"
            onClick={() => onClickButton('Here is where the modal should be shown')}
        >
            +
        </button>
    );
}

export { CreateTodoButton };