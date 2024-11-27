import { createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import { ModeContextProvider } from "./hooks/useMode";
import Load from "./pages/Load";
import Client from "./pages/Client";
import PrivateRoute from "./hooks/PrivateRoute";

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
        element: <PrivateRoute><Client/></PrivateRoute>
    }
])

export default router