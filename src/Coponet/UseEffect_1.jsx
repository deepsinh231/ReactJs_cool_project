import React, { useEffect, useState } from 'react';

const UseEffect_1 = () => {
    const [state, setstate] = useState(0);
    const [photo, thisis] = useState(null);
    const Photochang = (e) => {
        setstate(e.target.value)
    }
    useEffect(() => {
        if (state == null || state === '') {
            return;
        }
        fetch("https://picsum.photos/v2/list?page=1&limit=100",)
            .then(response => response.json())
            .then(json => thisis(json[state]?.download_url))
        fetch("https://picsum.photos/v2/list?page=1&limit=100",)
            .then(response => response.json())
            .then(json => thisis(json[state]?.download_url))
    }, [state])
    return (
        <>
            <div>
                photo 0 to 99
                <input type="number" value={state} onChange={Photochang} />

                <img src={photo} alt="This NOt Corect" className='imgss' />
                {/* <a href={photo} download>Download Image</a>  */}


            </div>
        </>
    );
};

export default UseEffect_1;
