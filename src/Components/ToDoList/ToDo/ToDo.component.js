import React from "react"

import "./ToDo.css";
import Check from "../../../Icons/tick-mark.svg";
import Delete from "../../../Icons/delete.svg";

const ToDo = ({ todo, key }) => {
    return (
        <li key={key} id="list-item">
            <img src={Check} 
                 id="check-image" 
                 alt="Check" 
                 onClick={() => alert("check-to-do")}>

            </img>
            {todo.title}
            <img src={Delete} 
                 id="delete-image" 
                 alt="Delete"
                 onClick={() => alert("delete-to-do")}>

            </img>
        </li>
    )
}

export default ToDo;