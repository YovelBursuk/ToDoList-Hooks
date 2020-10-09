import React, { useState } from 'react';
import ToDoList from './ToDoList/ToDoList.component';
import './App.css';
import { setInitialToDos } from '../Utils/Utils';

const App = () => {
  const [toDos] = useState(setInitialToDos());

  return (
    <div is="App">
      <div id="app-wrapper">
        <header>ToDo list using React Hooks!</header>
        <div id="app-body">
          <p>Your ToDos:</p>
          <div id="todos-list">
            <ToDoList toDos={toDos}></ToDoList>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
