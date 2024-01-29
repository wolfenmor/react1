import React from 'react';
import Character from "./character";

const Characters = ({items: characters}) => {
    return (
        <div id={"characters"}>
            {
                characters.map((value) => <Character character={value} key={value.id}></Character>)
            }
        </div>
    );
};

export default Characters;