import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import CharactersPage from "./Pages/CharactersPage";
import EpisodesPage from "./Pages/EpisodesPage";

const router = createBrowserRouter([
    {
        path: "", element: <MainLayout/>, errorElement: <ErrorPage/>, children: [
            {
                index: true, element: <Navigate to={"characters"}/>
            },
            {
                path: "characters", element: <CharactersPage/>
            },
            {
                path: "episodes/:ids", element: <EpisodesPage/>
            }
        ]
    }
])

export {router}