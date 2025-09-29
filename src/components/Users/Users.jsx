import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
    const usersData = useLoaderData()
    const usersStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: "20px",
        margin: '20px'
    }
    
    return (
        <div style={usersStyles}>
             {
                usersData.map(user => <User user={user} key={user.id}></User>)
             }
        </div>
    );
};

export default Users;