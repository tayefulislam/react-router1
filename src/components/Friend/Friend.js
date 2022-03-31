import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {

    const { id, name, username } = props.friend;

    let navigate = useNavigate()
    const showFriendDetails = () => {

        const path = `/friend/${username}`;
        navigate(path);
    }

    return (
        <div>

            <h1> Name: {name}</h1>
            <button onClick={showFriendDetails}>{username} id : {id}</button>



        </div>
    );
};

export default Friend;