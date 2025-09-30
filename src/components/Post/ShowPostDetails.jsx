import React, { use } from 'react';

const ShowPostDetails = ({postPromise}) => {
    const postDetails = use(postPromise)
    return (
        <div>
            <p>{postDetails.body}</p>
        </div>
    );
};

export default ShowPostDetails;