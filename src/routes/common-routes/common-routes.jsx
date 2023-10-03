import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/main-layout/MainLayout";
import Home from "../../components/home/Home";

const router = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout/>,
        children : [
            {
                path : "/",
                element : <Home/>
            }
        ]
    }
]);
export default router;