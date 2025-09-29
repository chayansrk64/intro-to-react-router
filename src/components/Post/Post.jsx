import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {id, title} = post
    return (
        <div style={{border: '2px solid green', borderRadius: '10px'}}>
            <p>Post Id: {id}</p>            
            <h3>Title: {title}</h3>
            <Link to={`/posts/${id}`}>Post Details</Link>
        </div>
    );
};

export default Post;