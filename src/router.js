import {createBrowserRouter} from "react-router-dom";

import TodosPage from "./pages/TodosPage";
import {MainLayout} from "./layout/MainLayout";
import AlbumsPage from "./pages/AlbumsPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "", element:<MainLayout/>, errorElement:<ErrorPage/>, children: [
            {
                path:"todos", element:<TodosPage/>
            },
            {
                path:"albums", element:<AlbumsPage/>
            }
        ]
    }
])

export {router}