import React from 'react';
// import { Link } from "react-router-dom";
import CustomLink from '../CustomLink/CustomLink';


const Header = () => {
    return (
        <div>
            <h1>Welcome to Router Fancy Website!</h1>


            <nav>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="/about">About</CustomLink>

                <CustomLink to="/posts">Posts</CustomLink>
            </nav>

        </div>
    );
};

export default Header;