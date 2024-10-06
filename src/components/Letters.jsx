import React from 'react';
import Letter from './Letter';
import './Letters.css';

const Letters = () => {
    const whats = [
        { char: 'W', rotation: 0 },
        { char: 'H', rotation: 15 },
        { char: 'A', rotation: -15 },
        { char: 'T', rotation: 30 },
        { char: 'L', rotation: -30 , size: '20px'},
        { char: 'S', rotation: 0 },
    ];

    const cookin = [
        { char: 'C', rotation: 15 },
        { char: 'O', rotation: -15 },
        { char: 'O', rotation: 30 },
        { char: 'K', rotation: -30 },
        { char: 'i', rotation: 0 },
        { char: 'N', rotation: 15 },
    ];

    return (
        <div className="words-container">
            <div className="word1">
                {whats.map(({ char, rotation, size }) => (
                    <Letter key={char} letter={char} rotation={rotation} size={size} />
                ))}
            </div>
            <div className="word2">
                {cookin.map(({ char, rotation, size }) => (
                    <Letter key={char} letter={char} rotation={rotation} size={size} />
                ))}
            </div>
        </div>
    );
};

export default Letters;
