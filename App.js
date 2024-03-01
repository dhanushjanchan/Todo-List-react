import './App.css';
import Header from './MyComponents/Header';
import { AddTodo } from './MyComponents/AddTodo';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import { useState, useEffect } from "react";




function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if(todos.length===0){
      sno=0;
    }
    else{
       sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    }
    const newTodo = {
      sno: sno,
      name: title,
      decs: desc
    };
    setTodos([...todos, newTodo]);
    console.log(newTodo);

   
    
      
    
  };

  const onDelete = (todoToDelete) => {
    console.log("Im onDelete", todoToDelete);
    setTodos(todos.filter((todo) => todo.sno !== todoToDelete.sno));
    localStorage.setItem("todos",JSON.stringify(todos));
  };

  return (
    <>
    
      <Header title="Todo-List" damn={true}/>
      
          
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
           
            
          
          
          
        
    
    <Footer />
    
  </>
);
}

export default App;
