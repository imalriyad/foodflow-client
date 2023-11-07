import { Helmet } from "react-helmet-async";
import TopSelling from "../Components/Card/TopSelling/TopSelling";
import Hero from "../Headers/Hero";
import OurCheif from "../Components/TopCheif/OurCheif";


const Home = () => {


  return (
    <div>
      <Helmet>
        <title>FoodFlow | Home</title>
      </Helmet>
    <Hero></Hero>
    <TopSelling></TopSelling>
     <OurCheif></OurCheif>
    </div>
  );
};

export default Home;
