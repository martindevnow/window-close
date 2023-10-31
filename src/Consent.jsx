import React from 'react'
import { useNavigate } from "react-router-dom";

const Consent = () => {
  let navigate = useNavigate();
  return (
    <div><h1>Consent</h1>
    <button onClick={() => {
      navigate( "/alberta");
    }}>Login</button><button onClick={() => window.close()}>Cancel</button></div>
  )
}

export default Consent