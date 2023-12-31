import React, { useEffect, useState } from 'react';

const UsingAJAX = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then((res) => {
                setIsLoaded(true);
                setItems(res);
            }, (error) => {
                setIsLoaded(true);
                setError(error);
            })
    }, []);
    if (error) {
        return <div>Error:{error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
        );
    }
      

};

export default UsingAJAX;