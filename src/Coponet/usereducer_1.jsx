import React from 'react';
import { useReducer } from 'react';
const initialvalu = { count: 0 ,valu:"decrement"}
const reducer = (state, action) => {
    switch (action.type) {
        case "decrement":
            return { count: state.count - 1,valu:"decrement" }
        case "iecrement":
            return { count: state.count + 1,valu:"iecrement" }

        default:
            return state ;
    }
}
const Usereducer_1 = () => {
    const [state, dispatch] = useReducer(reducer, initialvalu)
    return (
        <>
            <button className='btn-1' onClick={() => dispatch({ type: "decrement" })}>-</button>
            {state.count}
            <button className='btn-1' onClick={() => dispatch({ type: "iecrement" })}>+</button>
            <br />
            {state.valu}
        </>
    );
};

export default Usereducer_1;