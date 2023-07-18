import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class Links extends Component {
    render() {
        return (
            <>
                <Link to='hooks' className='new-btn'>React Hooks</Link>
                <Link to='API' className='new-btn'>React API Example</Link>
                <Outlet></Outlet>
            </>
        );
    }
}

export default Links;
