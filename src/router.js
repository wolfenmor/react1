import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import UsersPage from "./Pages/UsersPage";
import UserDetailsPage from "./Pages/UserDetailsPage";
import PostsPage from "./Pages/PostsPage";
import PostDetailsPage from "./Pages/PostDetailsPage";

const router = createBrowserRouter([
    {
        path: "", element: <MainLayout/>, errorElement: <ErrorPage/>, children:[
            {
                index: true, element: <Navigate to={"users"}/>
            },
            {
                path: "users", element: <UsersPage/>
            },
            {
                path:"users/:id", element: <UserDetailsPage/>, children: [
                    {
                        path: "posts", element: <PostsPage/>
                    }
                ]
            },
            {
                path: "posts/:id", element: <PostDetailsPage/>
            }
        ]
    }
])

export {router}