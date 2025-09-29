import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
    const {id, name, phone, username, website} = user;
    
    return (
        <div style={{border: '1px solid yellow', borderRadius: '10px'}}>
            <h3>{name}</h3>
            <p>{username}</p>
            <p>{phone}</p>
            <p>{website}</p>
            <Link to={`/users/${id}`}>User Details</Link>
        </div>
    );
};

export default User;