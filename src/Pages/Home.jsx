import { Helmet } from "react-helmet-async";
import TopSelling from "../Components/Card/TopSelling/TopSelling";
import Hero from "../Headers/Hero";
import OurCheif from "../Components/TopCheif/OurCheif";
import Testimonial from "../Testimonial/Testimonial";
import NewsLater from "../Components/NewsLater";
import BookTable from "../Components/BookTable";


const Home = () => {


  return (
    <div >
      <Helmet>
        <title>FoodFlow | Home</title>
      </Helmet>
    <Hero></Hero>
    <TopSelling></TopSelling>
    <BookTable></BookTable>
     <OurCheif></OurCheif>
     <NewsLater></NewsLater>
     <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
