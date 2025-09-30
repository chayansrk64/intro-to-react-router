import React from 'react';
import { NavLink } from 'react-router';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                {/* <NavLink to="/">Home</NavLink> */}
             
                <NavLink to="/">
                    {({ isPending }) => (<span>Home {isPending && <p>SPNNING...</p>}</span>)}
                </NavLink>
                
                <NavLink to="/about">About</NavLink>
     
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;