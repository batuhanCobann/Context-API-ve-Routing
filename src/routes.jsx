import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import GirisBilgileri from "./pages/GirisBilgileri";
import Kullanicilar from "./pages/Kullanicilar";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/GirisBilgileri",
                element: <GirisBilgileri />,
            },
            {
                path: "/Kullanicilar",
                element: <Kullanicilar />,
            }
        ],
    },
])