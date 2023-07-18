import React, { useContext } from 'react';
import { Firstname } from '../UseContext_1.jsx'

const C = () => {
    const firstname = useContext(Firstname)
    return (
        <>
            {firstname}
        </>
    );
};

export default C;