import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h1>Errror</h1>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        }
    ]
  },
]);

export default router;
