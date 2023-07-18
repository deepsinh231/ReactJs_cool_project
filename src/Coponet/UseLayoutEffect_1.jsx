import React, { useEffect, useLayoutEffect, useRef } from 'react';

const UseLayoutEffect_1 = () => {
    const ref=useRef("red")
    useEffect(()=>{
        ref.current="yellow"
        console.log(ref,"useEffect");
    })
    useLayoutEffect(()=>{
        window.scrollBy(0,500)
        console.log(ref,"useLayoutEffect");
    })
    return (
        <>
            <div style={{height:'1000px',background:"DarkSalmon"}}></div>
        </>
    );
};

export default UseLayoutEffect_1;