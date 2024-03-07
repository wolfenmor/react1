import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import EpisodesPage from "./pages/EpisodesPage";
import CharactersPage from "./pages/CharactersPage";

const router = createBrowserRouter([
    {
        path: "", element: <MainLayout/>, children: [
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