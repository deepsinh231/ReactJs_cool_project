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