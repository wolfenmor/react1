import React from 'react';

const Character = ({character}) => {
    return (
        <>
            <article id={"container-character"}>
                <div id={"div-img"}>
                    <img src={character.image} alt={"character_image"}/>
                </div>
                <div id={"characterCard"}>
                <h2>{character.id} {character.name}</h2>
                <p>{character.status} - <b>{character.species}</b></p>
                <p> gender: {character.gender}</p>
            </div>

            </article>

        </>
    );
};

export default Character;