import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
    // const params = useParams()
    const user = useLoaderData()
    const {name, website} = user;
    
    console.log('UserDetails',user);
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate("/users")
    }
    return (
        <div>
            User Details Here
            <h3>Name: {name}</h3>
            <p>Website: {website}</p>
            {/* <Link to={`/users`}>Go Back</Link> */}
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;