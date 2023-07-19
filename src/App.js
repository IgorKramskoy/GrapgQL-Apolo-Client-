import React from "react";
import TodoList from "./components/todoList/todoList";
import './styles.scss'
import CreateTodo from "./components/CreateToDo/CreateTodo";

function App() {
  return (
    <div className='box'>
      <h1 >
        ToDoList
      </h1>
        <CreateTodo/>
        <TodoList/>
    </div>
  );
}

export default App;
