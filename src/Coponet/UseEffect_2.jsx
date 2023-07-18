import React, { useEffect, useState } from 'react';

const UseEffect_2 = () => {
    const [state, setstate] = useState('posts');
    const [list, data] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/' + state)
            .then(response => response.json())
            .then(json => data(json))
    }, [state])
    return (
        <>
            <button className='btn-1' onClick={() => { setstate('posts') }}>Posts</button>
            <button className='btn-1' onClick={() => { setstate('users') }} >Users</button>
            <button className='btn-1' onClick={() => { setstate('comments') }}>Comments</button>
            <br />
            {state}
            <pre>
                {list && list.map((list) => {
                    return <pre key={list.id}>{list.id}:-{list.name}</pre>
                })}
            </pre>
        </>
    );
};

export default UseEffect_2;