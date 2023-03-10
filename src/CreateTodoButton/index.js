import React from "react";
import { TodoContext } from "../TodoContext";
import './CreateTodoButton.css';

function CreateTodoButton(){
    const {
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onClickButton = () => {
        if (openModal === true) {
            setOpenModal(false);
        }else{
            setOpenModal(true);
        }
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