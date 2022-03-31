import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
// import CustomLink from '../CustomLink/CustomLink';


const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])


    return (
        <div>

            <h1>Total Posts : {posts.length}</h1>

            <div>
                {
                    posts.map(post => <Link key={post.id} to={`/posts/${post.id}`}>{post.id} </Link>)
                }
            </div>

            <Outlet></Outlet>


        </div>
    );
};

export default Posts;