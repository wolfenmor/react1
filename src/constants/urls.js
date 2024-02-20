const baseURL = "https://rickandmortyapi.com/api"

const characters = "/character"
const episodes = "/episode"

const urls = {
    episodes: {
        base: episodes,
        byId: (id) => `${episodes}/${id}`
    },
    characters: {
        base: characters,
        byId: (id) => `${characters}/${id}`
    }
}

export {baseURL, urls}