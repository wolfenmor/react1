import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import CarsPage from "./Pages/CarsPage";

const router = createBrowserRouter([
    {
        path: "", element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={"cars"}/>
            },
            {
                path: "cars", element: <CarsPage/>
            }
        ]
    }
])
export {router}