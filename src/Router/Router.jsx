import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Form/Login";
import Registration from "../Form/Registration";
import ErorrPage from "../Pages/ErorrPage";
import FoodDetails from "../Pages/FoodDetails";
import Order from "../Pages/Order";
import MyOrder from "../Pages/MyOrder/MyOrder";
import Menu from "../Pages/Menu";
import Blog from "../Pages/Blog/Blog";
import AddFood from "../Pages/AddFood/AddFood";
import MyAddedItem from "../Pages/MyAddedItem/MyAddedItem";
import AllFood from "../Pages/AllFood/AllFood";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Contact from "../Pages/Contact";

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
        loader: () =>
          fetch("https://foodflow-server.vercel.app/api/v1/totalItem"),
      },
      {
        path: "/FoodDetails/:id",
        element: (
          <PrivateRoute>
            <FoodDetails></FoodDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://foodflow-server.vercel.app/api/v1/foods/${params.id}`),
      },
      {
        path: "/order/:id",
        element: (
          <PrivateRoute>
            <Order></Order>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://foodflow-server.vercel.app/api/v1/foods/${params.id}`),
      },
      {
        path: "/MyOrder",
        element: (
          <PrivateRoute>
            <MyOrder></MyOrder>
          </PrivateRoute>
        ),
      },
      {
        path: "/AddFood",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/MyAddedFood",
        element: (
          <PrivateRoute>
            <MyAddedItem></MyAddedItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/Menu",
        element: <Menu></Menu>,
      },
      {
        path: "/Blog",
        element: <Blog></Blog>,
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Registration",
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default router;
