import React, { useReducer } from 'react'


function Reduceuse() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <div>{state}</div>
            <div>
                <button type="button" onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
                <button type="button" onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
                <button type="button" onClick={() => dispatch({ type: "CLEAR" })}>CLEAR</button>
            </div >
        </>
    )
}
const initialState = 8;
const reducer = (state, action) => {
    if (action.type === 'INCREMENT') {
        return state + 1;
    }
    if (action.type === 'DECREMENT') {
        return state - 1;
    }
    if (action.type === 'CLEAR') {
        return state = 0;
    }
    return state
}

export default Reduceuse