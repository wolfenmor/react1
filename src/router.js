import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import LeaguePage from "./pages/LeaguePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "", element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={"leagues"}/>
            },
            {
                path: "leagues", element: <LeaguePage/>
            }
        ]
    }
])

export {router}