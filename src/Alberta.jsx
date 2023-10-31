import React from 'react'
import { useNavigate } from "react-router-dom";

const Alberta = () => {
  let navigate = useNavigate();

  return (
    <div><h1>Alberta.ca</h1>
    <button onClick={() => {
      navigate( "/success");
    }}>Signin</button></div>
  )
}

export default Alberta