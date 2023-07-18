import React, { createContext } from 'react';
import { useContext, useState } from 'react';

const Themcontest = createContext('light')
const ComponentName = () => {
    const [them, setthem] = useState("light");
    const [sun, moon] = useState("fa-solid fa-moon");

    return (
        <>
            <Themcontest.Provider value={them}>
                <From />
            </Themcontest.Provider>
            <button onClick={() => {
                setthem(them === 'dark' ? 'light' : 'dark')
                moon(sun === "fa-solid fa-moon" ? "fa-regular fa-sun" : "fa-solid fa-moon")
            }}>
                <i key={them} className={sun}></i>

            </button>
            <br></br>
        </>
    );
};
function From() {
    return (
        <Panel title='Logoin Page'>
            <button>Sign in</button>
            <button>Sign up</button>
        </Panel>
    )
}
function Panel({ title, children }) {
    const thesm = useContext(Themcontest);
    const className = 'panel-' + thesm;
    return (
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}
export default ComponentName;