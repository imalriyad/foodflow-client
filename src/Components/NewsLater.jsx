/* eslint-disable react/no-unescaped-entities */
const NewsLater = () => {
  return (
    <div className="bg-dark">
 
<div className="p-6 container md:w-2/3 xl:w-auto mx-auto flex flex-col xl:items-stretch justify-between xl:flex-row">
            <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
                <img src="https://i.postimg.cc/MHLyprXK/mailchimp-monochromatic.png" alt="Envelope with a newsletter" role="img" className=" lg:w-1/2 w-full" />
            </div>
            <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28">
                <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold text-light leading-10 text-gray-800 mb-4 text-center xl:text-left md:mt-0 mt-4">Subscribe</h1>
                <p className="text-base leading-normal text-gray-600 text-center xl:text-left text-light">Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Subscribe now to get latest offer</p>
                <div className="flex md:flex-row flex-col mt-12">
                    <input className="bg-gray-100 rounded-lg input-bordered md:rounded-r-none text-base leading-none text-gray-800 px-4 py-3  md:w-4/5 border border-mainColor focus:outline-none focus:border-gray-500" type="email" placeholder="Your Email" />
                    <button className="btn md:mt-0 mt-3 md:btn-lg md:rounded-l-none text-base bg-mainColor hover:bg-mainColor">subscribe</button>
                </div>
            </div>
          
        </div>
    </div>
  );
};

export default NewsLater;
