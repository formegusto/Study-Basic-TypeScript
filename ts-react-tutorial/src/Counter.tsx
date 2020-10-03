import React, { useReducer } from 'react';

type Action = { type: 'INCREASE' } 
    | { type: 'DECREASE' };

function reducer(state: number, action: Action): number {
    switch (action.type) {
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}

function Counter() {
    const [count, dispatch] = useReducer(reducer, 0);
    const increase = () => dispatch({ type: 'INCREASE'});
    const decrease = () => dispatch({ type: 'DECREASE'});

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={increase}>+1</button>
                <button onClick={decrease}>-1</button>
            </div>
        </div>
    )
}

export default Counter;