import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {

    const { id, name, username } = props.friend;

    let navigate = useNavigate()
    const showFriendDetails = () => {

        const path = `/friend/${id}`;
        navigate(path);
    }

    return (
        <div>

            <h1> Name: {name}</h1>
            <Link to={'/friend/' + id}> Details</Link> <br />
            <button onClick={showFriendDetails}>{username} id : {id}</button>



        </div>
    );
};

export default Friend;