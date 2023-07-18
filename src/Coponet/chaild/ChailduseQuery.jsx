import React from 'react';
import { useQuery } from 'react-query';

const ChailduseQuery = () => {
    const { isLoading, error, data } = useQuery('repoData',() =>
          fetch('https://jsonplaceholder.typicode.com/posts').then(
            (res) => res.json(),
          ),
      )
    if (error) {
        return <div>Error:{error.message}</div>
    } else if (isLoading) {
        return <div>Loading...</div>;
    } else {
        return (<>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
           
        </>

        );
    }
};

export default ChailduseQuery;