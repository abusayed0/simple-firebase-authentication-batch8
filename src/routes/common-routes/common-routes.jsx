import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/main-layout/MainLayout";
import Home from "../../components/home/Home";
import Login from "../../components/login/Login";

const router = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/login",
                element : <Login/>
            }
        ]
    }
]);
export default router;