import React from "react";
import { TodoContext } from "../TodoContext";
import './CreateTodoButton.css';

function CreateTodoButton(){
    const {
        setOpenModal,
    } = React.useContext(TodoContext);

    const onClickButton = () => {
        // If the state is open(true) we close it (false) and vice versa
        setOpenModal(prevState => !prevState);
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