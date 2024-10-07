import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function StickyNoteButton() {
  return (
    <div>
      <Link to="/list-view">
        <div className="sticky-note-button">
          <img src="src/imgs/sticky-note.png" alt="Upload" />
        </div>
      </Link>
    </div>
  );
}

export default StickyNoteButton;
