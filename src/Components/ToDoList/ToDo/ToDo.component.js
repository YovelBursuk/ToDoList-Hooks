import React from "react"

import "./ToDo.css";
import Check from "../../../Icons/tick-mark.svg";
import Delete from "../../../Icons/delete.svg";

const ToDo = ({ todo, index, onCheck, onDelete, onSetTodoValue }) => {
    console.log(index);
    return (
        <li key={index} id="list-item">
            <img src={Check} 
                 id="check-image" 
                 alt="Check" 
                 onClick={() => onCheck(index)}>

            </img>
            {
                !!todo.title ? 
                <span className={todo.isFinished ? "finished-todo" : ""}>{todo.title}</span>
                :
                <div id="todo-input">
                    <input id="todo-text-input" type="text" placeholder="What do you need to do?"></input>
                    <button id="todo-input-save">Save!</button>
                </div>
            }
            
            <img src={Delete} 
                 id="delete-image" 
                 alt="Delete"
                 onClick={() => onDelete(index)}>

            </img>
        </li>
    )
}

export default ToDo;