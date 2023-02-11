import React, { useState } from "react";

function ToDoForm(props){
    // props
    const {addTodo} =props;
    // state
    const [todo,setTodo] =useState("");
    // Action
    const handleSubmit =(event) => {
        event.preventDefault();
        if (todo){
            addTodo(todo);
            setTodo("");
        }
    };
return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add Todo here...." value={todo} onChange={(event)=> setTodo(event.target.value)}/>
    </form>
);
}
export default ToDoForm;