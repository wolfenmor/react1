import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "./Layout/MainLayout";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import CharactersPage from "./Pages/CharactersPage";
import EpisodesPage from "./Pages/EpisodesPage";
const router = createBrowserRouter([
    {
        path: "", element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={"episodes"}/>
            },
            {
                path: "episodes", element: <EpisodesPage/>
            },
            {
                path: "characters/:ids", element: <CharactersPage/>
            }
        ]
    }
])

export {router}