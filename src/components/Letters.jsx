import React from 'react';
import Letter from './Letter';
import './Letters.css';

const Letters = () => {
    const whats = [
        { char: 'W', rotation: -5, size: '110px' },
        { char: 'H', rotation: -10, size: '90px' },
        { char: 'A', rotation: 15 },
        { char: 'T', rotation: 30, size: '140px'},
        { char: 'S', rotation: 0 },
    ];

    const cookin = [
        { char: 'C', rotation: 15 },
        { char: 'O', rotation: -15 },
        { char: 'O', rotation: 30 },
        { char: 'K', rotation: -30 },
        { char: 'i', rotation: 0 },
        { char: 'N', rotation: 15 },
        { char: 'q', rotation: 0},
    ];

    return (
        <div className="words-container">
            <div className="whats">
                {whats.map(({ char, rotation, size }) => (
                    <Letter key={char} letter={char} rotation={rotation} size={size} />
                ))}
            </div>
            <div className="cookin">
                {cookin.map(({ char, rotation }) => (
                    <Letter key={char} letter={char} rotation={rotation} />
                ))}
            </div>
        </div>
    );
};

export default Letters;
