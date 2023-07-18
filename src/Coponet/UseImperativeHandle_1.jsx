import React, { useRef } from 'react';
import Chaild from './chaild/UseImperativeHandlchaild.jsx'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const UseImperativeHandle_1 = () => {
    const ref = useRef();
    return (
        <>
    
            <Chaild ref={ref}></Chaild>
            <button onClick={() => ref.current.incr()}>Perent</button>
            <SyntaxHighlighter className="rounded-5" language="jsx" style={atomOneDarkReasonable}>
                {codeString}
            </SyntaxHighlighter>
        </>
    );
};

export default UseImperativeHandle_1;

const codeString = `
*****perent*****



import React, { useRef } from 'react';
import Chaild from './chaild/UseImperativeHandlchaild.jsx'

const UseImperativeHandle_1 = () => {
    const ref =useRef();
    return (
        <>
            <Chaild ref={ref}></Chaild>
            <br />
            <button onClick={()=>ref.current.incr()}>Perent</button>
        </>
    );
};

export default UseImperativeHandle_1;


*****Chaild*****
import React, { forwardRef, useImperativeHandle, useState } from 'react';

const UseImperativeHandlchaild = forwardRef((props, ref) => {
    const [state, setstate] = useState(0);

    useImperativeHandle(ref, () => ({ incr }))
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
***********************************************************************
<button onClick={() => ref.current.incr()}>Perent</button>
forwardRef
useImperativeHandle

`