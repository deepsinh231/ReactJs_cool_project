import React, { createContext } from 'react';
import A from './UseContext/A.jsx'


const Firstname = createContext()
function UseContext_1 () {
    return (
        <>
            <Firstname.Provider value="deep">
                <A></A>
            </Firstname.Provider>
        </>
    );
};

export default UseContext_1;
export { Firstname }