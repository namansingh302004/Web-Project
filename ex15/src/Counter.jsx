import { useState } from "react"


export default function Counter(){
   const [count,setCount] = useState(0);
   function handleinc(){
       setCount(count+1);
   }


   function handledec(){
       setCount(count-1);
   }


   return(
      
       <>
       <h2>{count}</h2>
       <button onClick={handleinc}>Increase</button> &nbsp;&nbsp;&nbsp;
       <button onClick={handledec}>Decrease</button>
       </>
   )
}
