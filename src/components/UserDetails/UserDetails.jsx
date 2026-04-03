import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const {website, name, email} = user;
    const navigate = useNavigate()

    return (
        <div>
            <h3>User Details</h3>
            <h5>Name: {name}</h5>
            <p>Website: {website}</p>
            <p>Email: {email}</p>
            <button onClick={()=> navigate(-1)}>Go Back</button>
        </div>
    );
};

export default UserDetails;