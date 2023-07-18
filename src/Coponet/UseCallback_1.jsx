import React, { useCallback, useState } from 'react';
import UseCallbackback from './UseCallbackback/UseCallbackback.jsx';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const UseCallback_1 = () => {
    const [stateone, setstateone] = useState(0);
    const [statetwo, setstatetwo] = useState(0);
    const getued = useCallback(() => {
        console.log(statetwo + 1, statetwo - 1);
        for (let index = 0; index < 1000000000; index++) { }
        console.log("hi");
        return [statetwo + 1, statetwo - 1];
    }, [stateone])

    return (
        <div>
            <button onClick={() => { setstateone(stateone + 1) }}>Count {stateone}</button>
            <br />
            <button onClick={() => { setstatetwo(statetwo + 1) }}>Count {statetwo}</button>
            <UseCallbackback getued={getued} />
            <SyntaxHighlighter className="rounded-5" language="jsx" style={atomOneDarkReasonable}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
};

export default UseCallback_1;

const codeString =`
*****Perent****
import React, { useCallback, useState } from 'react';
import UseCallbackback from './UseCallbackback/UseCallbackback.jsx';


const UseCallback_1 = () => {
    const [stateone, setstateone] = useState(0);
    const [statetwo, setstatetwo] = useState(0);
    const getued = useCallback(() => {
        console.log(statetwo + 1, statetwo - 1);
        for (let index = 0; index < 1000000000; index++) { }
        console.log("hi");
        return [statetwo + 1, statetwo - 1];
    }, [stateone])

    return (
        <div>
            <button onClick={() => { setstateone(stateone + 1) }}>Count {stateone}</button>
            <br />
            <button onClick={() => { setstatetwo(statetwo + 1) }}>Count {statetwo}</button>
            <UseCallbackback getued={getued} />
        </div>
    );
};

export default UseCallback_1;


******Chaild******
import React, { useEffect, useState } from 'react';

const UseCallbackback = ({getued}) => {
    const [state, setstate] = useState([]);
    useEffect(() => {
        setstate(getued())
    }, [getued]);
    
    return (
        <div>
            {state && state.map(keys=>{
                return <div key={keys}>{keys}</div>
            })}
        </div>
    );
};

export default UseCallbackback;
`