import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 

function StickyNoteButton() {
  return (
    <div>
      <Link to="/list-view">
        <img
          src="src/imgs/sticky-note.png"
          alt="Upload"
          className="sticky-note-button"
        />
      </Link>
    </div>
  );
}

export default StickyNoteButton;