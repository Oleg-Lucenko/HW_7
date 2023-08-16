import React from 'react';
import { useReducer, useContext } from 'react';
import {Context} from '../App';



function reducer(state, action) {
    switch (action.type) {
        case 'decrement':
            return ({counter: state.counter - 1});
        case 'increment':
            return ({counter: state.counter + 1});
    }
}


function Counter() {

    const counter = useContext(Context);

    const [state, dispatch] = useReducer(reducer, counter);
    return (
        <div>
            <button onClick={() => dispatch({type: 'decrement'})} disabled={state.counter <= 0 ? 'disabled' : null}>-</button>
               <p> Counter: {state.counter} </p>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </div>
    )
}

export default Counter;