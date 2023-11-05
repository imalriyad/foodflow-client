import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllFood from "../Pages/AllFood";
import Login from "../Form/Login";
import Registration from "../Form/Registration";
import ResetPass from "../Form/ResetPass";
import ErorrPage from "../Pages/ErorrPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErorrPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/All Food",
        element: <AllFood></AllFood>,
        loader:()=> fetch('http://localhost:5000/api/v1/totalItem')
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
