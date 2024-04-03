import React, { useState } from 'react'
import Todo from './components/Todo'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
const App = () => {
  

  return (
      <>
       <Routes>
        <Route path="/" element={<Todo/>} />
        <Route path="/*" element={<Todo/>}/>
        <Route path="todo" element={<Todo/>}/>
       </Routes>
         
      </>      
   
  )
}

export default App
