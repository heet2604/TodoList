import React, { useState } from "react";

export const Addtodo = ({addTodo}) => {
    const [task,setTask]=useState("");
    const [desc,setDesc]=useState("");
    const [time,setTime]=useState("");

    const submit = (e)=>{
        e.preventDefault();              // page does not reload itself
        if(!task || !desc || !time){
            alert("Task or Description or Time cannot be empty");
            return;
        }
        addTodo(task,desc,time);
        setTask("");
        setDesc("");
        setTime("");
    }
  return (
    <div className="container my-4">
        <h3>Add a Task</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="task" className="form-label my-2">
            Task
          </label>  
          <input
            type="text"
            value={task} onChange={(e)=>setTask(e.target.value)}
            className="form-control"
            id="task"
            aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            value={desc} onChange={(e)=>setDesc(e.target.value)}
            className="form-control"
            id="desc"/>
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">
            Time
          </label>
          <input
            type="text"
            value={time} onChange={(e)=>setTime(e.target.value)}
            className="form-control"
            id="time"/>
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add
        </button>
      </form>
    </div>
  );
};

export default Addtodo;
