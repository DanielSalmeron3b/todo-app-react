import React from "react";
import './TodoItem.css';

function TodoItem(props) {
    return (
    <li className="todo-item-list">
        <span className={`item-list--icon list-icon--check ${props.completed && 'list-icon--active'}`}>
        √
        </span>
        <p className={`item-list-p ${props.completed && 'item-list-p--complete'}`}>
        {props.text}
        </p>
        <span className="item-list--icon list-icon--delete">
        X
        </span>
    </li>
    );
}

export { TodoItem };