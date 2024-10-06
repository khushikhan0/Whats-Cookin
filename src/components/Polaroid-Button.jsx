import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function PolaroidButton() {
  return (
    <div>
      <Link to="/upload-view">
        <div className="polaroid-button">
          <img src="src/imgs/polaroid.png" alt="Upload" />
        </div>
      </Link>
    </div>
  );
}

export default PolaroidButton;
