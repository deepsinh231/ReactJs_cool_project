import React from 'react';
import useFetch from 'react-fetch-hook';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const Reactfetchhook = () => {
    const { isLoading, data, error } = useFetch("https://jsonplaceholder.typicode.com/posts")
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
            <SyntaxHighlighter className="rounded-5" language="jsx" style={atomOneDarkReasonable}>
                {codeString}
            </SyntaxHighlighter>
        </>

        );
    }
};

export default Reactfetchhook;

const codeString = `
import React from 'react';
import useFetch from 'react-fetch-hook';

const Reactfetchhook = () => {
    const { isLoading, data ,error} =  useFetch("https://jsonplaceholder.typicode.com/posts")
    if (error) {
        return <div>Error:{error.message}</div>
    } else if (isLoading) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        {item.title}
                    </li>
                ))}
            </ul>
        );
    }
};

export default Reactfetchhook;

`