import { useState } from 'react'

import './App.css'

function C2() {
  const fruits = ["Apple","Orange","Guava"];
  

  return (
    <>
    <p>Question 2: </p>
    <ul>
      {fruits.map((fruit,index)=>(
        <li key={index}>{fruit}</li>
      ))}
    </ul>
    </>
  )
}

export default C2
