import React from 'react';
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  const mystyle={
      minHeight:"70vh",
      margin:"40px auto"
  }
  return (
    <div className='container my-3' style={mystyle}>
      <h3 className='my-4'>ToDos List</h3> {/* "my-3" is for vertical margin */}
      {props.todos.length === 0 ?    //if
        "No tasks to display"
       :                           //else
        props.todos.map((task) => {         
          return (
            <>
              <TodoItem t={task} key={task.sno} onDelete={props.onDelete} /><hr/>
            </>
          );
        })
      }
    </div>
  );
}

export default Todos;
