import React from 'react';
import PropTypes from 'prop-types';

const Letter = ({ letter, rotation, size }) => {
    return (
        <img 
            src={`/images/${letter}.png`} 
            alt={letter} 
            className="letter" 
            style={{ 
                transform: `rotate(${rotation}deg)`, 
                width: size || '100px',
                height: 'auto'
            }} // rotates the image
        />
    );
};

// prop validation 
Letter.propTypes = {
    letter: PropTypes.string.isRequired, // letter must be a string
    rotation: PropTypes.number.isRequired, // rotation must be a number
    size: PropTypes.number // size doesn't need to be specified
};

export default Letter;
