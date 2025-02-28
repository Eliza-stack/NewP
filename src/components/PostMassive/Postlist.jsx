import React from "react";
import Post from "../Post/Post";



const PostList = ({ posts, onDelete }) => {
    return (
        <div>
            {posts.length > 0 ? (
                posts.map(post => (
                    <Post key={post.id} post={post} onDelete={onDelete} />
                ))
            ) : (
                <p>Нет постов</p>
            )}
        </div>
    );
};

export default PostList;