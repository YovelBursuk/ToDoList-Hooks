import React from "react"
import ToDo from "./ToDo/ToDo.component";

import "./ToDoList.css";

const ToDoList = ({toDos = []}) => {
    return (
        <ul id="todo-list">
            {
                toDos.map((todo, index) => <ToDo key={index} todo={todo}></ToDo>)
            }
        </ul>
    )
}

export default ToDoList;