import { Helmet } from "react-helmet-async";
import TopSelling from "../Components/Card/TopSelling/TopSelling";
import Hero from "../Headers/Hero";
import OurCheif from "../Components/TopCheif/OurCheif";
import Testimonial from "../Testimonial/Testimonial";
import NewsLater from "../Components/NewsLater";


const Home = () => {


  return (
    <div>
      <Helmet>
        <title>FoodFlow | Home</title>
      </Helmet>
    <Hero></Hero>
    <TopSelling></TopSelling>
     <OurCheif></OurCheif>
     <NewsLater></NewsLater>
     <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
