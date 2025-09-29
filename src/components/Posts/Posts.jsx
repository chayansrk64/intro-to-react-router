import React, { use } from 'react';
import Post from '../Post/Post';
 

const Posts = ({postsPromise}) => {
    const postsData = use(postsPromise);
    console.log("Posts Data =>",postsData);
    const postsStyles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: "20px",
        margin: '20px'
    }
    return (
        <div>
            <p>This is post Component</p>
            <div style={postsStyles}>
                {
                    postsData.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;