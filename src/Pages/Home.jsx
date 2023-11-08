import { Helmet } from "react-helmet-async";
import TopSelling from "../Components/Card/TopSelling/TopSelling";
import Hero from "../Headers/Hero";
import OurCheif from "../Components/TopCheif/OurCheif";
import Testimonial from "../Testimonial/Testimonial";


const Home = () => {


  return (
    <div>
      <Helmet>
        <title>FoodFlow | Home</title>
      </Helmet>
    <Hero></Hero>
    <TopSelling></TopSelling>
     <OurCheif></OurCheif>
     <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
