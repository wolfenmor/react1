import React from 'react';

const User = ({user, details}) => {
    const {name, username, email} = user;
    return (
        <div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <button onClick={()=> details(user)}>click</button>
            <br/>
            <hr/>

        </div>
    );
};

export default User;