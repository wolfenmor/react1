import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import UsersPage from "./Pages/UsersPage";
import UserDetailsPage from "./Pages/UserDetailsPage";
import PostTitle from "./Pages/PostTitle";

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
                                path:":userId", element: <PostTitle/>
                            }
                        ]
                    }
                ]
            }
        ]
    }
])

export {router}