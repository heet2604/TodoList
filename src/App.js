import './App.css';
import { useState , useEffect} from 'react';
import React from 'react';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import Addtodo from "./MyComponents/Addtodo"; 
import About from "./MyComponents/About";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(t)=>{

    setTodos(todos.filter((to)=>{      //creates a new array with elements which satisfy the given condition 
      return to!==t;                    //added in new array if it is not equal to element in the todos array
    }));
    localStorage.getItem("todos",JSON.stringify(todos));
    //alert("This todoItem has been deleted",t);
  }

  let sno;
  const addTodo=(task,desc,time)=>{
    if(todos.length===0){                 //when there are no tasks then start with sno=0  
      sno=0;
    }
    else{
      sno=todos[todos.length-1].sno+1;
    }
    
    const mytask={
      sno:sno,
      task:task,
      desc:desc,
      time:time
    }

    setTodos([...todos,mytask]);
    console.log(mytask);          //whenever we add any task we need to store it inlocal storage
  }
  
  
  const [todos,setTodos]=useState(initTodo);                                     //setTodos is a function that updates these todos
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])


  return (
    <>
    <Router>
      <Header title="MyTodoList" searchBar={true}/> {/*This is called the parent component */}
      <Switch>
        <Route exact path="/" render={()=>{
          return(
          <>
            <Addtodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
          </>)
        }}>
        </Route>
        <Route exact path="/about"><About/></Route>
      </Switch>
      <Footer/>   
    </Router>
    </> 
  );
}
  
export default App;