import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../store/actions/counterAction'; 

function Counter() {
    const dispatch = useDispatch();
    const count = useSelector(state => state);

    const handleIncrement = () => {
        dispatch(increment()); 
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };

    return (
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <h1>{count}</h1>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}

export default Counter;
