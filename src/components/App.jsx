import React, { useState, useEffect } from "react";
import "./App.css";
import Letters from './Letters';

function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   // Fetch data from FastAPI backend
  //   fetch("http://localhost:8000/msg")
  //     .then((response) => response.json())
  //     .then((data) => setMessage(data.message))
  //     .catch((error) => console.error("Error:", error));
  // }, []);

  return (
    <div className="background">
      <div className="fridge">
        <div className="handle"></div>
        <div className="handle-shadow"></div>
    
        <Letters /> 
      </div>
    </div>
  );
}

export default App;
