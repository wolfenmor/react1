const baseURL = "https://jsonplaceholder.typicode.com"
const users = "/users"
const posts = "/posts"

const urls = {
    users : {
        base: users,
    },
    posts: {
        base: posts,
        byId: (id) => `${users}/${id}/${posts}`
    }
}

export {baseURL, urls}