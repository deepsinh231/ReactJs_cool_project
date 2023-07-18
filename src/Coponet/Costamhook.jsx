import React, { useState } from 'react';
import uselookar from './chaild/uselookar.jsx';


const Costamhook = () => {
    const [name, setstate] = useState([]);
    uselookar(name);
    return (
       <>
       <input type="text" value={name} onChange={(e)=>{setstate(e.target.value)}} />
       </>
    );
};

export default Costamhook;