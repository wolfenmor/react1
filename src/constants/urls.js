const baseURL = "https://v3.football.api-sports.io"
const leagues = "/leagues"

const urls = {
    leagues: {
        base: leagues,
        byId: (id) => `${leagues}/${id}`
    }
}

export {baseURL, urls}