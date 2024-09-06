import React from 'react'

export const TodoItem = ({t,onDelete}) => {
  return (
    <div>
      <h4>{t.task}</h4>
      <p>{t.desc}</p>
      <p>{t.time}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(t)}}>Delete</button>   {/*()=> this makes sure that the function is called only if clicked and not called during rendering*/}
    </div>
  )
}
  
export default TodoItem;
