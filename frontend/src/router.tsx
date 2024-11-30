import { createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import { ModeContextProvider } from "./hooks/useMode";
import Client from "./pages/Client";
import PrivateRoute from "./hooks/PrivateRoute";
import Company from "./pages/Company";
import UpdateCompany from "./pages/UpdateCompany";

const router = createBrowserRouter([
    {
        path:'/',
        element: <ModeContextProvider><Auth/></ModeContextProvider>
    },
    {
        path: "/client",
        element: <ModeContextProvider><PrivateRoute><Client/></PrivateRoute></ModeContextProvider>
    },
    {
        path:"/createcompany",
        element: <ModeContextProvider><PrivateRoute><Company/></PrivateRoute></ModeContextProvider>
    },
    {
        path:"/updatecompany/:id",
        element: <ModeContextProvider><PrivateRoute><UpdateCompany/></PrivateRoute></ModeContextProvider>
    }
])

export default router