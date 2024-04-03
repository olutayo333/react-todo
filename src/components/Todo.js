import React from 'react'
import { useState } from 'react'

const Todo = () => {
    //Declariations 
  const [todoName, settodoName] = useState('')
  const [todoCategory, settodoCategory]= useState('')
  const [todoTime, settodoTime]= useState('')
  const [allTodo, setallTodo]= useState([]) //creating an empty array
  
  const[editMode, setEditMode]= useState(false);
  const[currentIndex, setcurrentIndex ] = useState(0)
  //function
const test =(e)=>{
  console.log(e.target.value)
}
//Delete
const deleteTodo =(index) =>{
  let newallTodo = [...allTodo]  //passing the data of alltodo to todo
  newallTodo.splice(index,1)
  setallTodo(newallTodo)
}
 
//function 
const addTodo=()=>{
  console.log(todoName,todoCategory,todoTime)
  let todo = {todoName, todoCategory, todoTime}
  setallTodo([...allTodo, todo]) //spread operator to add item to the existing items in the array
  settodoName(""); settodoCategory(""); settodoTime('');
}
//edit
const editTodo = (index) =>{ 
setEditMode(true)
setcurrentIndex(index)
settodoName(allTodo[index].todoName)
settodoCategory(allTodo[index].todoCategory)
settodoTime(allTodo[index].todoTime)
}
const updateDetails =()=>{
  console.log(currentIndex);
  let newTodo = [...allTodo]
  newTodo.splice(currentIndex,1,{todoName, todoCategory, todoTime })
  setallTodo([newTodo])
  setEditMode(false) 
  settodoName(""); settodoCategory(""); settodoTime('');
}
  return (
    <div>
       <h1> My Todo Application </h1>
        <input type='text' placeholder='Todo Name' onChange={(e)=>settodoName(e.target.value)} value={todoName}/>
        <input type='text' placeholder='Todo Category' onChange={(e)=>settodoCategory(e.target.value)} value={todoCategory}/>
        <input type='text' placeholder='Todo Time' onChange={(e)=>settodoTime(e.target.value)} value={todoTime}/>
        
        {/* Ternary Operator for changing state  */}
        {
          editMode? <button onClick={updateDetails} >Update Details </button>:
          <button onClick={addTodo}> Add Todo </button>
        }
        <hr/>
        
        <h1> All Todo</h1>
       
        {
          allTodo.map((todo, index) => (
            <div key={index}>
              <h1>{todo.todoName}</h1>
              <h1>{index}</h1> 
              <button onClick={()=>deleteTodo(index)}>Delete</button> 
              <button onClick={()=>editTodo(index)}>Edit</button>
            </div>
          ))
        }
    </div>
  )
}

export default Todo
