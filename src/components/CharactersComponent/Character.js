import React from 'react';
const Character = ({character}) => {
    const {name, species, status, image} = character;

    return (
        <div>
            <div>name: {name}</div>
            <div>species: {species}</div>
            <div>status: {status}</div>
            <img src={image} alt={name}/>
            <hr/>
        </div>
    );
};

export default Character;