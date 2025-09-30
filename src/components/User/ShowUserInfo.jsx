import React, { use } from 'react';

const ShowUserInfo = ({userPromise}) => {
    const userInfo = use(userPromise);
    console.log(userInfo);
    return (
        <div style={{backgroundColor: "orange"}}>
           <p>{userInfo.phone}</p>
           <p>{userInfo.website}</p>
        </div>
    );
};

export default ShowUserInfo;