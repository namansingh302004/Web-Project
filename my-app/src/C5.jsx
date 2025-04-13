import { useState } from 'react'

import './App.css'

function C5() {  
    var isMorning = true; 
    if (isMorning == true){

        return (
          <>
          <p>Question 5: </p>
          <div>Good Morning</div>
          </>
        )
    }
    else{
        return(
            <>
            <p>Question 5: </p>
            <div>Good Evening</div>
            </>
        )
    }
}

export default C5
