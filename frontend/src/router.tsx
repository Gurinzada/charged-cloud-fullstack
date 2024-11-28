import { createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import { ModeContextProvider } from "./hooks/useMode";
import Load from "./pages/Load";
import Client from "./pages/Client";
import PrivateRoute from "./hooks/PrivateRoute";
import Company from "./pages/Company";

const router = createBrowserRouter([
    {
        path:'/',
        element: <ModeContextProvider><Auth/></ModeContextProvider>
    },
    {
        path:"/loading",
        element: <Load/>
    },
    {
        path: "/client",
        element: <ModeContextProvider><PrivateRoute><Client/></PrivateRoute></ModeContextProvider>
    },
    {
        path:"/createcompany",
        element: <ModeContextProvider><PrivateRoute><Company/></PrivateRoute></ModeContextProvider>
    }
])

export default router