import React ,{useState} from "react";
// Components
import ToDoForm from "./components/ToDoForm/ToDoForm";
import TodoItem from "./components/ToDoItem/ToDoItem";

import "./App.css";

function App(){
  // State
  const [todos,setTodos] = useState([
    {text:"Do this", isCompleted: false,},
    {text:"Do that", isCompleted: false,},
    {text:"May be something else", isCompleted: false,},
  ]);
console.log(todos)
// Adding some Functions - This is a array function , ...todos is array in a array 
const addTodo =(text) => {
  const newTodos = [...todos, {text:text, isComplete:false}];
  setTodos(newTodos);
};

const completeTodo = (index) => {
  const newTodos = [...todos];
  newTodos[index].isCompleted = true;
  setTodos(newTodos);
};

const removeTodo = (index) => {
  const newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
};

  return (
    <div className="app">
      <div className="todo-list">
      <h1>ToDo List</h1>
      {todos.map((todo,index)=>(
        <TodoItem key ={index} todo={todo} index={index} completeTodo={completeTodo} removeTodo={removeTodo} />
      ))}
      <ToDoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}

export default App;