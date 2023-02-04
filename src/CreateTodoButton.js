import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(){
    const onClickButton = () => {
        alert('Here is where the modal should be shown');
    }

    return (
        <button 
            className="create-todo-button"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };