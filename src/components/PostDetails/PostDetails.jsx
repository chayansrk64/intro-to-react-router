import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {

    const postDetails = useLoaderData()
    console.log('Post dEtails', postDetails);
    const navigate = useNavigate()

    return (
        <div>
            <p>id: {postDetails.id}</p>
            <p>details: {postDetails.body}</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetails;