import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { postId } = useParams()

    const [post, setPost] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [postId]);



    const { title, body } = post;

    return (
        <div>

            <h1>Post Id : {postId} </h1>
            <h2>Title : {title}</h2>

            <p>{body}</p>



        </div>
    );
};

export default PostDetail;