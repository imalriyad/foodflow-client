import { Helmet } from "react-helmet-async";
import TopSelling from "../Components/Card/TopSelling/TopSelling";
import Hero from "../Headers/Hero";


const Home = () => {


  return (
    <div>
      <Helmet>
        <title>FoodFlow | Home</title>
      </Helmet>
    <Hero></Hero>
    <TopSelling></TopSelling>
   
    </div>
  );
};

export default Home;
