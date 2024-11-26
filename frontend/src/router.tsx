import { createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import { ModeContextProvider } from "./hooks/useMode";

const router = createBrowserRouter([
    {
        path:'/',
        element: <ModeContextProvider><Auth/></ModeContextProvider>
    }
])

export default router