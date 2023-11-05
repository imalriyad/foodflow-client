import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllFood from "../Pages/AllFood";
import Login from "../Form/Login";
import Registration from "../Form/Registration";
import ResetPass from "../Form/ResetPass";
import ErorrPage from "../Pages/ErorrPage";
import FoodDetails from "../Pages/FoodDetails";
import Order from "../Pages/Order";
import MyOrder from "../Pages/MyOrder/MyOrder";
import Menu from "../Pages/Menu";

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
        loader: () => fetch("http://localhost:5000/api/v1/totalItem"),
      },
      {
        path: "/FoodDetails/:id",
        element: <FoodDetails></FoodDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/foods/${params.id}`),
      },
      {
        path: "/order/:id",
        element: <Order></Order>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/foods/${params.id}`),
      },
      {
        path: "/MyOrder",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/Contact",
        element: <AllFood></AllFood>,
      },
      {
        path: "/Menu",
        element: <Menu></Menu>,
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
