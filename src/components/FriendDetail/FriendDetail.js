import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {

    // const params = useParams()

    const { friendId } = useParams();

    const [friend, setFriend] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))

    }, [])


    const { name, email, address, company } = friend
    return (
        <div>

            <h1>Bodhor Details eiKhane. {friendId}</h1>

            <h3>Name : {name}</h3>
            <h3>Email : {email}</h3>
            <p>cCity : {address?.city}</p>

            <p>Company Name : {company?.name}</p>


        </div>
    );
};

export default FriendDetail;