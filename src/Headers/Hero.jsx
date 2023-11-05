/* eslint-disable react/no-unescaped-entities */
import { MdFastfood } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div >
      <div
        className="hero min-h-[90vh]"
        style={{
          backgroundImage: "url(https://i.postimg.cc/ZYphTKn2/herobg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-dark"></div>
        <div className="hero-content text-left text-neutral-content">
          <div className="flex lg:flex-row flex-col space-y-4 gap-10 justify-between items-center">
            <div className="lg:w-11/12 w-full ">
              <h1 className="mb-5 md:text-6xl text-light text-4xl font-bold ">
                We belive good food offer great smile
              </h1>
              <p className="mb-5 md:text-base text-sm">
                We Believe Good Food Offers Great Smiles,' our mission is to
                create unforgettable moments through our delectable, flavorful
                food, ensuring that every bite brings genuine smiles to your
                face
              </p>
             <Link to={'/All Food'}> <button  className="btn flex items-center bg-mainColor border-none hover:bg-mainColor rounded text-light">
                Explore Meals<MdFastfood className="text-2xl"></MdFastfood>
              </button>{" "}</Link>
            </div>
            <motion.div
              className="box "
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                ease: "linear",
                duration: 1,
                x: { duration: 1 }
              }}
            >
              <img
                src="https://themewagon.github.io/restoran/img/hero.png"
                className="w-[90%] mx-auto"
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
