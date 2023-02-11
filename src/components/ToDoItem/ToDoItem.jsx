import React from "react";

// function ToDoItem({todo})

import "./ToDoItem.css";

function TodoItem(props){
    // console.log("props",props);
    const {todo, index, completeTodo , removeTodo} = props;
return (
<div className={`todo ${todo.isCompleted ? "complete" : ""}`}>
    {todo.text}
    <div>
    <button onClick={() => completeTodo(index)}>Complete</button>
    <button onClick={() => removeTodo(index)}>Remove!</button>
    </div>
</div>
);
}

export default TodoItem;