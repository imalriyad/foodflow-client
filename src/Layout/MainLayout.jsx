import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Headers/Navbar";

const MainLayout = () => {
  const { state } = useNavigation();

  return (
    <div>
      <Navbar></Navbar>
      {state === "loading" ? (
        <div className="w-16 my-[20%] h-16 mx-auto border-4 border-dashed rounded-full animate-spin border-mainColor"></div>
      ) : (
        <Outlet></Outlet>
      )}
    </div>
  );
};

export default MainLayout;
