import React from 'react';
import uselookar from './chaild/uselookar.jsx';
import updatevalue from './localStorage/localStorage.jsx'


const UseLocalStorage = () => {
    const [name, setstate] = updatevalue();
    uselookar(name);
    return (
        <>
            <input type="text" value={name} onChange={(e) => { setstate(e.target.value) }} />
            
        </>
    );
};

export default UseLocalStorage;