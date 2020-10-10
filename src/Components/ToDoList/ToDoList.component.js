import React from "react"
import ToDo from "./ToDo/ToDo.component";

import "./ToDoList.css";

const ToDoList = ({toDos = [], onTodoCheck, onTodoDelete}) => {
    return (
        <ul id="todo-list">
            {
                toDos.map((todo, index) => <ToDo key={index}
                                                 index={index} 
                                                 onCheck={onTodoCheck}
                                                 onDelete={onTodoDelete}
                                                 todo={todo}>

                                            </ToDo>)
            }
        </ul>
    )
}

export default ToDoList;