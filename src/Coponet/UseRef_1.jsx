import React, { useRef } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const UseRef_1 = () => {
    const inputref = useRef()
    const hendalclick = () => {
        if (inputref.current.value == "") {
            inputref.current.focus()
            inputref.current.style.color = "black"
        
        } else {
            inputref.current.style.color = "red"
        }
    }
    return (
        <>
            <input ref={inputref} type="text" />
            <button onClick={hendalclick}>This</button>
            <SyntaxHighlighter className="rounded-5" language="jsx" style={atomOneDarkReasonable}>
                {codeString}
            </SyntaxHighlighter>
        </>
    );
};

export default UseRef_1;
const codeString = `
import React, { useRef } from 'react';

const UseRef_1 = () => {
    const inputref=useRef()
    const hendalclick =()=>{
        if(inputref.current.value == ""){
            inputref.current.focus()
            inputref.current.style.color="black"
        }else{
            inputref.current.style.color="red"
        }
    }
    return (
        <>
            <input  ref={inputref} type="text" />
            <button onClick={hendalclick}>This</button>
        </>
    );
};

export default UseRef_1;
`