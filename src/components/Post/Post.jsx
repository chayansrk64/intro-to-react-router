import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import ShowPostDetails from './ShowPostDetails';

const Post = ({post}) => {

    const [showDetails, setShowDetails] = useState(false)

    const {id, title} = post


    const postPromise = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json())

    return (
        <div style={{border: '2px solid green', borderRadius: '10px'}}>
            <p>Post Id: {id}</p>            
            <h3>Title: {title}</h3>
            <Link to={`/posts/${id}`}>Post Details</Link>


        {/* for practise show details here */}

        <button onClick={() => setShowDetails(!showDetails)}>{showDetails ? "Hide" : "Show"} Details</button>
        
        {
            showDetails && <Suspense fallback={<p>Post Details Loading...</p>}>
                            <ShowPostDetails postPromise={postPromise}></ShowPostDetails>
                        </Suspense>
        }
        


        </div>
    );
};

export default Post;