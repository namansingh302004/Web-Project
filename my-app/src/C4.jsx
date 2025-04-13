import { useState } from 'react'

import './App.css'

function C4() {  
    const a = 4;
    const b = 5;
    const sumofsquares = a*a + b*b;
  return (
    <>
    <p>Question 4: </p>
    <p style={{fontSize:"30px"}}>Sum of Squares of 4 and 5 is: {sumofsquares}</p>
    </>
  )
}

export default C4
