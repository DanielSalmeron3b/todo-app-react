import React from "react";
import { TodoContext } from "../TodoContext";
import './CreateTodoButton.css';

function CreateTodoButton(){
    const {
        setOpenModal,
    } = React.useContext(TodoContext);

    const onClickButton = () => {
        setOpenModal(true);
    };

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