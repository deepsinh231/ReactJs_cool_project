import React, { forwardRef, useImperativeHandle, useState } from 'react';

const UseImperativeHandlchaild = forwardRef((props, ref) => {
    const [state, setstate] = useState(0);

    useImperativeHandle(ref, () => ({ incr}))
    const incr = () => {
        setstate(state + 1);
    }

    return (
        <>
            {state}
            <button onClick={incr}>Count Chaild</button>
        </>
    );
})

export default UseImperativeHandlchaild;