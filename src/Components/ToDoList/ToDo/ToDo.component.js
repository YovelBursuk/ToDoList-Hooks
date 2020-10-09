import React from "react"

import "./ToDo.css";

const ToDo = ({ todo, key }) => {
    return (
        <li key={key} id="list-item">
            <button id="check-todo">Check</button>
            {todo.title}
            <button id="delete-todo">Delete</button>
        </li>
    )
}

export default ToDo;