import React, {createContext, useContext, useState} from 'react';

export const Context = createContext()
export const EpisodeContext = ({children}) => {
    const [currentEpisode, setCurrentEpisode] = useState("");

    return (
        <Context.Provider value={{currentEpisode, setCurrentEpisode}}>
            {children}
        </Context.Provider>
    );
};
export const useEpisode = () => {
    return useContext(Context)
}

export default EpisodeContext;