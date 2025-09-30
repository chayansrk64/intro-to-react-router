import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import ShowUserInfo from './ShowUserInfo';



const User = ({user}) => {

    const [showInfo, setShowInfo] = useState(false);

    const {id, name, phone, username, website} = user;
    
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());

    return (
        <div style={{border: '1px solid yellow', borderRadius: '10px'}}>
            <h3>{name}</h3>
            <p>{username}</p>
            <p>{phone}</p>
            <p>{website}</p>
            <Link to={`/users/${id}`}>User Details</Link>

            <button onClick={() => setShowInfo(!showInfo)}> {showInfo ? "Hide" : "Show"} Info</button>

         
            {
             showInfo &&  <Suspense fallback={<p>Showing Info</p>}>
                                <ShowUserInfo userPromise={userPromise}></ShowUserInfo>
                        </Suspense>
           }
          

        </div>
    );
};

export default User;