import React, { useMemo, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const UseMemo_1 = () => {
    const [cont, setstate] = useState(0);
    const word = ["one", "two", "three", "four", "five", "six"];
    const print = word[cont]
    function computeLetterCount(word) {
        for (let index = 0; index < 100000000; index++) {
        }
        return word.length;
    }
    const letterCount = useMemo(() => computeLetterCount(word), [])
    return (
        <>
            <div>
                not  useMemo<br />{print}{print.length}<br />
                <button onClick={() => {cont + 1 === word.length ? setstate(0) : setstate(cont + 1) }}>Hi</button>

                <br /><hr /> <br />use useMemo<br />
                {print}{letterCount}
                <br />
                <button onClick={() => { if (cont + 1 === word.length) { setstate(0) } else { setstate(cont + 1) } }}>Hi</button>
            </div>
            <SyntaxHighlighter className="rounded-5" language="jsx" style={atomOneDarkReasonable}>
                {codeString}
            </SyntaxHighlighter>
        </>
    );
};

export default UseMemo_1;
const codeString = `
import React, { useMemo, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const UseMemo_1 = () => {
    const [cont, setstate] = useState(0);
    const word = ["one", "two", "three", "four", "five", "six"];
    const print = word[cont]
    function computeLetterCount(word) {
        for (let index = 0; index < 100000000; index++) {
        }
        return word.length;
    }
    const letterCount = useMemo(() => computeLetterCount(word), [])
    return (
        <>
            <div>
                not  useMemo<br />{print}{print.length}<br />
                <button onClick={() => { if (cont + 1 == word.length) { setstate(0) } else { setstate(cont + 1) } }}>Hi</button>

                <br /><hr /> <br />use useMemo<br />
                {print}{letterCount}
                <br />
                <button onClick={() => { if (cont + 1 == word.length) { setstate(0) } else { setstate(cont + 1) } }}>Hi</button>
            </div>
 </>
    );
};

export default UseMemo_1;
`