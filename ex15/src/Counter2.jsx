import { useReducer } from "react";


// Reducer function to manage state
function counterReducer(state, action) {
 switch (action.type) {
   case "INCREMENT":
     return { count: state.count + 1 };
   case "DECREMENT":
     return { count: state.count - 1 };
   default:
     throw new Error("Unknown action type");
 }
}


export default function Counter2() {
 // useReducer hook: [state, dispatch function]
 const [state, dispatch] = useReducer(counterReducer, { count: 0 });


 return (
   <>
     <h2>{state.count}</h2>
     <button onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button> &nbsp;&nbsp;&nbsp;
     <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrease</button>
   </>
 );
}
