const baseURL = "https://jsonplaceholder.typicode.com"

const comments = "/comments"
const posts = "/posts"

const urls = {
    comments:{
        base:comments,
        byId: (id) => `${comments}/${id}`,
        getPostsByPostId:(id) => `${posts}/${id}/${comments}`
    }
}

export {baseURL, urls}