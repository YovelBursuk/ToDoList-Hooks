import React, { useState } from 'react';
import ToDoList from './ToDoList/ToDoList.component';
import './App.css';
import { setInitialToDos } from '../Utils/Utils';

const App = () => {
  const [toDos, setToDos] = useState(setInitialToDos());

  const checkToDo = (index) => {
    let newToDos = [...toDos];
    newToDos[index].isFinished = !newToDos[index].isFinished;
    setToDos(newToDos);
  }

  const deleteToDo = (index) => {
    let newToDos = [...toDos];
    newToDos.splice(index, 1);
    setToDos(newToDos);
  }

  return (
    <div is="App">
      <div id="app-wrapper">
        <header>ToDo list using React Hooks!</header>
        <div id="app-body">
          <p>Your ToDos:</p>
          <div id="todos-list">
            <ToDoList toDos={toDos} onTodoCheck={checkToDo} onTodoDelete={deleteToDo}></ToDoList>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
