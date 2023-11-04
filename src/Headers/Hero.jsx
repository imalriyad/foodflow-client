/* eslint-disable react/no-unescaped-entities */
import {MdFastfood} from 'react-icons/md'
const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-[90vh]"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/ZYphTKn2/herobg.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 bg-dark"></div>
        <div className="hero-content text-left text-neutral-content">
          <div className="flex lg:flex-row flex-col space-y-4 gap-5 lg:py-0 py-5 justify-between items-center">
            <div><h1 className="mb-5 md:text-7xl text-light text-4xl font-bold">We belive good food  offer great smile</h1>
            <p className="mb-5 md:text-base text-sm">
            We Believe Good Food Offers Great Smiles,' our mission is to create unforgettable moments through our delectable, flavorful food, ensuring that every bite brings genuine smiles to your face
            </p>
            <button className="btn flex items-center bg-mainColor border-none hover:bg-mainColor rounded text-light">Explore Meals<MdFastfood className='text-2xl'></MdFastfood></button> </div>
            <div>
           <img src="https://themewagon.github.io/restoran/img/hero.png" className="w-[90%] mx-auto" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
