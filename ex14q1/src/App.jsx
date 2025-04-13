import { useState } from 'react'
import Q1 from "./Q1";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Q1/>
    </>
  )
}

export default App
