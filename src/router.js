import {createBrowserRouter} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import CommentsPage from "./Pages/CommentsPage";
import PostsPage from "./Pages/PostsPage";

const router = createBrowserRouter([
    {
        path:"", element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                path:"comments", element: <CommentsPage/>, children: [
                    {
                        path:"posts", element: <PostsPage/>
                    }
                ]
            }
        ]
    }
])

export {router}