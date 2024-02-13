const baseURL = "https://jsonplaceholder.typicode.com"

const todos = "/todos"
const albums = "/albums"

const urls = {
    todos:{
        base:todos,
        byId:(id)=> `${todos}/${id}`
    },
    albums: {
        base:albums,
        byId:(id) => `${albums}/${id}`
    }
}

export {baseURL, urls}