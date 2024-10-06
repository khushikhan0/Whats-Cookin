import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./components/App.jsx";
import "./index.css";

function Landing() {
  return (
    <Router>
      <div className="app-container">
        <App />
        <div className="test">
          <p>POOP</p>
        </div>
      </div>
    </Router>
  );
}

export default Landing;
