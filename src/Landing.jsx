import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import App from "./components/App.jsx";
import PolaroidButton from "./components/Polaroid-Button.jsx";
import StickyNoteButton from "./components/Sticky-Note-Button.jsx";
import UploadView from "./UploadView.jsx"
import ListView from "./ListView.jsx"
import "./index.css";

function LandingChild() {
    const location = useLocation(); // Get the current location
  
    return (
      <div className="app-container">
        <App />
        
        {/* Conditionally render the buttons only on the root ("/") path */}
        {location.pathname === '/' && <PolaroidButton />}
        {location.pathname === '/' && <StickyNoteButton />}
  
        <Routes>
          <Route path="/upload-view" element={<UploadView />} />
          <Route path="/list-view" element={<ListView />} />
        </Routes>
      </div>
    );
  }
  
  export default function Landing() {
    return (
      <Router>
        <LandingChild />
      </Router>
    );
  }