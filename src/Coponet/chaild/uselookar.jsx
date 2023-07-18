import  { useDebugValue, useEffect } from 'react';

const Uselookar = (name) => {
    useDebugValue(name)
    useEffect(()=>{
        console.log(name);
    },[name])
};

export default Uselookar;