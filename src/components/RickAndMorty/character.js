import React from 'react';

const Character = ({character}) => {
    return (
        <>
          <div id={"character"}>
              {character.id} {character.name}
          </div>

        </>
    );
};

export default Character;