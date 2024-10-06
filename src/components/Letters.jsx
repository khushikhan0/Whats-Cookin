import React from 'react';
import Letter from './Letter';

const Letters = () => {
    const letters = [
        { char: 'A', rotation: 0 },
        { char: 'C', rotation: 15 },
        { char: 'G', rotation: -15 },
        { char: 'H', rotation: 30 },
        { char: 'i', rotation: -30 },
        { char: 'K', rotation: 0 },
        { char: 'L', rotation: 15 },
        { char: 'N', rotation: -15 },
        { char: 'O', rotation: 30 },
        { char: 'S', rotation: -30 },
        { char: 'T', rotation: 0 },
        { char: 'W', rotation: 15 },
        { char: 'X', rotation: -15 },
    ];

    return (
        <div className="letters">
            {letters.map(({ char, rotation }) => (
                <Letter key={char} letter={char} rotation={rotation} />
            ))}
        </div>
    );
};

export default Letters;
