import React, { useState } from 'react';

export default function Bt7() {
    const [state, setState] = useState<number[]>([]);
    const newState: number[] = [...state];
    
    const addNumber = () => {
        newState.push(Math.floor(Math.random() * 9) + 1);
        setState(newState);
    };

    return (
        <div>
            Bt7
            <div>
                Mảng số: [{state.map((item, index) => {
                    if (index === state.length - 1) {
                        return item +"."
                    }
                    return item + ","
                })}]
            </div>
            <button onClick={addNumber}>Add element</button>
        </div>
    );
}

