import "./App.css"
import Posts from "./components/Posts/Posts"; // брать
import {useState} from "react";
function App() {
    const [post, setPost]= useState(null)
    const btn = (info) => {
        setPost(info)
    }

  return (
    <>
        {
            post && (
                    <div>
                        <h2>{post.title}</h2>
                        <p>User ID: {post.userId}</p>
                        <p>Post ID: {post.id}</p>
                        <p>Body: {post.body}</p>
                    </div>
                )
        }
<Posts btn={btn}></Posts>
    </>
  );
}
export default App; // отдавать