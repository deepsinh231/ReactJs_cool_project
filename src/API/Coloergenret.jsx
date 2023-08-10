import React, { useEffect, useState } from 'react';
import './color-genret.css';

const Coloergenret = () => {
    const [state, setstate] = useState('');
    const [vals, valsu] = useState('');
    useEffect(() => {
        const interval = setInterval((e) => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            const rgb = `rgb(${r},${g},${b})`
            setstate(rgb)
            valsu((prev) => [...prev, rgb])
        }, 1000);
        return () => clearInterval(interval);

    }, []);
    console.log(vals);
    // const stopivent = () => {
    //     valus ? cheng(false) : cheng(true)
    // }
    // console.log(valus);

    return (
        <>
            <div style={{ background: state }} id='color-genret' className="color-genret"></div>
            {/* <button onClick={stopivent} className='btn btn-primary text-center stop-class'>Stop Coloer</button> */}
            {vals && vals.map((valu, key) => {
            
                return <ul className='coloreul'>
                    <li key={key}>{key}:-{valu}</li>
                </ul>
            })}
        </>
    );
}

export default Coloergenret;
