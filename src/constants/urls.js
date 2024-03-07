const baseURL = "https://rickandmortyapi.com/api"
const episodes = "/episode"
const characters = "/character"
const urls = {
    episodes: {
        base: episodes,
    },
    characters: {
        base: characters,
        byIds: (ids) => `${characters}/${ids}`
    }
}

export {baseURL, urls}