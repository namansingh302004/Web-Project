import { useState } from 'react'
import './App.css'
import myimg2 from './Images/myimg2.jpg';

function Q1() {
  

  return (
    <>
      <img style={{height:"300px"}} src="/Images/myimg.jpg" alt="" />
      <br /> <br />
      <img style={{height:"300px"}} src={myimg2} alt="" />
    </>
  )
}

export default Q1
