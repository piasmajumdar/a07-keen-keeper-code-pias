import React from 'react';
import { useLoaderData } from 'react-router';

const FriendDetails = () => {
    const data = useLoaderData();
    console.log(data)
    
    return (
        <div>
            <h2>Friend Details Page</h2>
        </div>
    );
};

export default FriendDetails;