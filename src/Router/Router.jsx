import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllFood from "../Pages/AllFood";
import Login from "../Form/Login";
import Registration from "../Form/Registration";
import ResetPass from "../Form/ResetPass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h1>Errror</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/All Food",
        element: <AllFood></AllFood>,
      },
      {
        path: "/Contact",
        element: <AllFood></AllFood>,
      },
      {
        path: "/Menu",
        element: <AllFood></AllFood>,
      },
      {
        path: "/Blog",
        element: <AllFood></AllFood>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Registration",
        element: <Registration></Registration>,
      },
      {
        path: "/ResetPass",
        element: <ResetPass></ResetPass>,
      },
    ],
  },
]);

export default router;
