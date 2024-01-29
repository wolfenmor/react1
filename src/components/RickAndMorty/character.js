import React from 'react';

const Character = ({character}) => {
    return (
        <>
          <div id={"character"}>
              <h2>{character.name}</h2>
          </div>

        </>
    );
};

export default Character;