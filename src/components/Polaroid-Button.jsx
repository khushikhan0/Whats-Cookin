import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; 

function PolaroidButton() {
  return (
    <div>
      <Link to="/upload-view">
        <img
          src="src/imgs/polaroid.png"
          alt="Upload"
          className="polaroid-button"
        />
        {/* <div className='test'><p>POOP</p></div> */}
      </Link>
    </div>
  );
}

export default PolaroidButton;