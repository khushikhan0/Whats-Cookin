import React from 'react';
import PropTypes from 'prop-types';

const Letter = ({ letter, rotation }) => {
    return (
        <img 
            src={`/imgs/letters/${letter}.png`} 
            alt={letter} 
            className="letter" 
            style={{ transform: `rotate(${rotation}deg)` }} // rotates the image
        />
    );
};

// prop validation 
Letter.propTypes = {
    letter: PropTypes.string.isRequired, // letter must be a string
    rotation: PropTypes.number.isRequired, // rotation must be a number
};

export default Letter;
