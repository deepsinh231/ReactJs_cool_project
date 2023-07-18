import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const UseState_1 = () => {
    const [state, setstate] = useState(() => {
        console.log("contractor");
        return { cosunt: 0, name: "increment" }
    });
    const count = state.cosunt
    const name = state.name
    function increment() {
        setstate(e => {
            return { ...e, name: "increment", cosunt: e.cosunt + 1 }
        })
        // setstate(prevcount => prevcount + 1) //two Time increment
    }
    function dicrement() {
        setstate(e => {
            return { ...e, name: "dicrement", cosunt: count - 1}//only one time dicrement
        })

    }
    return (
        <>
            <button className='btn-1' onClick={increment}>+</button>
            {count}
            <button className='btn-1' onClick={dicrement}>-</button>
            <br />
            {name}
            <SyntaxHighlighter className="rounded-5" language="jsx" style={atomOneDarkReasonable}>
                {codeString}
            </SyntaxHighlighter>
        </>
    );
};

export default UseState_1;
const codeString = `
import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const UseState_1 = () => {
    const [state, setstate] = useState(() => {
        console.log("contractor");
        return { cosunt: 0, name: "increment" }
    });
    const count = state.cosunt
    const name = state.name
    function increment() {
        setstate(e => {
            return { ...e, name: "increment", cosunt: e.cosunt + 1}
        })
        // setstate(prevcount => prevcount + 1) //two Time increment
    }
    function dicrement() {
        setstate(e => {
            return { ...e, name: "dicrement", cosunt: state.cosunt - 1, cosunt: state.cosunt - 1 }//only one time dicrement
        })

    }
    return (
        <>
            <button className='btn-1' onClick={increment}>+</button>
            {count}
            <button className='btn-1' onClick={dicrement}>-</button>
            <br />
            {name}
            <SyntaxHighlighter className="rounded-5" language="jsx" style={atomOneDarkReasonable}>
                {codeString}
            </SyntaxHighlighter>
        </>
    );
};

export default UseState_1;
const codeString = ''
`