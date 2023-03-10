import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        createTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onWrite = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmitTodo = (event) => {
        event.preventDefault(); // Preventing the page from reloading
        createTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmitTodo}>
            <label>Create your first To-do</label>
            <textarea
                value={newTodoValue}
                onChange={onWrite}
                placeholder="Write your TODO here..."
            />
            <div className="form-button--container">
                <button
                    onClick={onCancel}
                    type="button"
                    className="form-button form-button__cancel"
                >
                    Cancelar
                </button>
                <button 
                    type="submit"
                    className="form-button form-button__create"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
};

export { TodoForm };