import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Headers/Navbar";
import Footer from "../Headers/Footer";
import { HelmetProvider } from "react-helmet-async";

const MainLayout = () => {
  const { state } = useNavigation();


  return (
    <div>
      <HelmetProvider>
        <Navbar></Navbar>
        {state === "loading" ? (
          <div className="w-16 my-[20%] h-16 mx-auto border-4 border-dashed rounded-full animate-spin border-mainColor"></div>
        ) : (
          <Outlet></Outlet>
        )}
        <Footer></Footer>
      </HelmetProvider>
    </div>
  );
};

export default MainLayout;
