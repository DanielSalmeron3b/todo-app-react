import React from "react";
import './TodoItem.css';

function TodoItem(props) {
    /* Not using this anymare */
    // const onComplete = () => {
    //     alert( `${props.text} is completed!`);
    // };

    const onDelete = () => {
        alert( `${props.text} was delete!`);
    };

    return (
    <li className="todo-item-list">
        <span 
            className={`item-list--icon list-icon--check ${props.completed && 'list-icon--active'}`}
            // Using the 'markTodoAsCompleted' function defined in App.js
            // to mark the task as completed
            onClick={props.onComplete}
        >
            √
        </span>
        <p className={`item-list-p ${props.completed && 'item-list-p--complete'}`}>
        {props.text}
        </p>
        <span 
            className="item-list--icon list-icon--delete"
            onClick={onDelete}
        >
            X
        </span>
    </li>
    );
}

export { TodoItem };