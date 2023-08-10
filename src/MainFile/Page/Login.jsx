import React from 'react';
import './password.css';

const StongPaasword = () => {
    const strength = {
        1: "weak",
        2: "medium",
        3: "strong",
    };
    const handleChange = () => {
    };
    return (
        <>
            <div className="card-csss">
                <div class="login-card">
                    <img
                        src="https://i.pinimg.com/originals/0a/5f/ea/0a5feae400fc816c4ca2aca8bd67a168.jpg"
                    />
                    <h2>Sign Up</h2>
                    <h3>Enter your credentials</h3>
                    <form class="login-form">
                        <div class="username">
                            <input
                                autocomplete="off"
                                spellcheck="false"
                                class="control"
                                type="email"
                                placeholder="Email"
                                value="joe@gmail.com"
                            />
                            <div id="spinner" class="spinner"></div>
                        </div>
                        <input
                            spellcheck="false"
                            class="control"
                            id="password"
                            type="password"
                            placeholder="Password"
                            onKeyUp={handleChange}
                        />
                        <div id="bars">
                            <div></div>
                        </div>
                        <div class="strength" id="strength"></div>
                        <button class="control" type="button">JOIN NOW</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default StongPaasword;
