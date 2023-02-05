import React from "react";
import './TodoItem.css';

function TodoItem(props) {
    const onComplete = () => {
        alert( `${props.text} is completed!`);
    };

    const onDelete = () => {
        alert( `${props.text} was delete!`);
    };

    return (
    <li className="todo-item-list">
        <span 
            className={`item-list--icon list-icon--check ${props.completed && 'list-icon--active'}`}
            onClick={onComplete}
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