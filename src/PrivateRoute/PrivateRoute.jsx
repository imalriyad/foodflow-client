/* eslint-disable react/prop-types */
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const { pathname } = useLocation();

  if (isLoading) {
    return (
      <div className="w-16 my-[20%] h-16 mx-auto border-4 border-dashed rounded-full animate-spin border-mainColor"></div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate state={pathname}  to={'/Login'}></Navigate>;
};

export default PrivateRoute;
