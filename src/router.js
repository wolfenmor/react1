import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import UsersPage from "./Pages/UsersPage";
import UserDetailsPage from "./Pages/UserDetailsPage";
import PostPage from "./Pages/PostPage";
import PostDetailsPage from "./Pages/PostDetailsPage";
import CommentsPage from "./Pages/CommentsPage";

const router = createBrowserRouter([
    {
        path: "", element:<MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index:true, element: <Navigate to={"users"}/>
            },
            {
                path:"users", element: <UsersPage/>, children: [
                    {
                        path: ":id", element: <UserDetailsPage/>, children: [
                            {
                                path:"posts", element: <PostPage/>, children: [
                                    {
                                        path: ":id", element: <PostDetailsPage/>, children: [
                                            {
                                                path:"comments", element: <CommentsPage/>
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
])

export {router}
