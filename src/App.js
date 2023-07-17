import React from "react";
import TodoList from "./components/todoList/todoList";
import './styles.scss'

function App() {
  return (
    <div className='box'>
      <h1 >
        ToDoList
      </h1>
        <TodoList/>
    </div>
  );
}

export default App;
