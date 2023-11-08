/* eslint-disable react/no-unescaped-entities */
import Marquee from "react-fast-marquee";
import Rating from "./Rating";

const Testimonial = () => {
  return (
    <div className="bg-[#f1f2f6]  pb-10">
      <div id="testimonial" className="py-6 px-4 max-w-screen-xl mx-auto">
        <div className="max-w-screen-sm mx-auto text-center px-4 my-14 space-y-3">
          <p className="text-mainColor font-semibold text-sm md:text-base group-hover:text-white mt-3">
            Testimonial
          </p>
          <h1 className="md:text-5xl text-2xl gap-2 font-semibold text-center py-2 flex items-center justify-center">
            Our Clients Say!!!
          </h1>
        </div>

        <Marquee pauseOnHover={true}>
          <div className="flex justify-around gap-5">
            <div className=" group hover:bg-mainColor hover:text-light p-6 cursor-pointer duration-200 rounded-xl md:w-[400px] w-[290px] drop-shadow-xl bg-light ">
              <div className="flex items-center gap-4">
                <img
                  src="https://i.ibb.co/NYQPn7M/Ellipse-2-1.png"
                  className="w-[40px]"
                  alt=""
                />
                <span>
                  {" "}
                  <h1 className="font-semibold">Ben Stokes</h1>
                  <p className="text-[#737373] group-hover:text-light text-xs">
                    Food vlogger
                  </p>
                </span>
              </div>
              <p className="mt-5 italic font-light text-dark group-hover:text-light md:text-sm text-xs">
                FoodFlow is a gem! The food is exceptional, and the service is
                quick and friendly. I had their famous pasta, and it was pure
                perfection
              </p>
              <Rating></Rating>
            </div>

            <div className=" group hover:bg-mainColor hover:text-light p-6 cursor-pointer duration-200 rounded-xl md:w-[400px] w-[290px] drop-shadow-xl bg-light ">
              <div className="flex items-center gap-4">
                <img
                  src="https://img.freepik.com/premium-photo/bearded-fashionable-mature-man-gray-suit-holding-his-mustaches_1429-5442.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698451200&semt=ais"
                  className="w-[40px] h-[40px] rounded-full"
                  alt=""
                />
                <span>
                  {" "}
                  <h1 className="font-semibold">David Boitang</h1>
                  <p className="text-[#737373] group-hover:text-light text-xs">
                    Food vlogger
                  </p>
                </span>
              </div>
              <p className="mt-5 italic font-light text-dark group-hover:text-light md:text-sm text-xs">
                FoodFlow is a gem! The food is exceptional, and the service is
                quick and friendly. I had their famous pasta, and it was pure
                perfection
              </p>
              <Rating></Rating>
            </div>

            <div className=" group hover:bg-mainColor hover:text-light p-6 cursor-pointer duration-200 rounded-xl md:w-[400px] w-[290px] drop-shadow-xl bg-light ">
              <div className="flex items-center gap-4">
                <img
                  src="https://themewagon.github.io/restoran/img/team-2.jpg"
                  className="w-[40px] rounded-full"
                  alt=""
                />
                <span>
                  {" "}
                  <h1 className="font-semibold">Johnson Charls</h1>
                  <p className="text-[#737373] group-hover:text-light text-xs">
                    Food vlogger
                  </p>
                </span>
              </div>
              <p className="mt-5 italic font-light text-dark group-hover:text-light md:text-sm text-xs">
                FoodFlow is a gem! The food is exceptional, and the service is
                quick and friendly. I had their famous pasta, and it was pure
                perfection
              </p>

              <Rating></Rating>
            </div>

            <div className=" group hover:bg-mainColor hover:text-light p-6 cursor-pointer duration-200 rounded-xl md:w-[400px] w-[290px] drop-shadow-xl bg-light ">
              <div className="flex items-center gap-4">
                <img
                  src="https://themewagon.github.io/restoran/img/team-4.jpg"
                  className="w-[40px] rounded-full"
                  alt=""
                />
                <span>
                  {" "}
                  <h1 className="font-semibold">Tim David</h1>
                  <p className="text-[#737373] group-hover:text-light text-xs">
                    Food vlogger
                  </p>
                </span>
              </div>
              <p className="mt-5 italic font-light text-dark group-hover:text-light md:text-sm text-xs">
                FoodFlow is a gem! The food is exceptional, and the service is
                quick and friendly. I had their famous pasta, and it was pure
                perfection
              </p>
              <Rating></Rating>
            </div>

            <div className=" group hover:bg-mainColor hover:text-light p-6 cursor-pointer duration-200 rounded-xl md:w-[400px] w-[290px] drop-shadow-xl bg-light ">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="w-[40px] rounded-full"
                  alt=""
                />
                <span>
                  {" "}
                  <h1 className="font-semibold">Adam Hunk </h1>
                  <p className="text-[#737373] group-hover:text-light text-xs">
                    Food vlogger
                  </p>
                </span>
              </div>
              <p className="mt-5 italic font-light text-dark group-hover:text-light md:text-sm text-xs">
                FoodFlow is a gem! The food is exceptional, and the service is
                quick and friendly. I had their famous pasta, and it was pure
                perfection
              </p>
              <Rating></Rating>
            </div>

            <div className=" group hover:bg-mainColor hover:text-light p-6 cursor-pointer duration-200 rounded-xl md:w-[400px] w-[290px] drop-shadow-xl bg-light ">
              <div className="flex items-center gap-4">
                <img
                  src="https://themewagon.github.io/restoran/img/team-3.jpg"
                  className="w-[40px] rounded-full"
                  alt=""
                />
                <span>
                  {" "}
                  <h1 className="font-semibold">Micky aurthur </h1>
                  <p className="text-[#737373] group-hover:text-light text-xs">
                    Food vlogger
                  </p>
                </span>
              </div>
              <p className="mt-5 italic font-light text-dark group-hover:text-light md:text-sm text-xs">
                FoodFlow is a gem! The food is exceptional, and the service is
                quick and friendly. I had their famous pasta, and it was pure
                perfection
              </p>
              <Rating></Rating>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonial;
