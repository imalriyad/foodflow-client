import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import AllCards from "../AllCards";
import { Link } from "react-router-dom";


const TopSelling = () => {
  const axios = useAxios();
  const { isLoading, data: popularItem } = useQuery({
    queryKey: ["popularItem"],
    queryFn: async () => {
      const res = await axios.get("/foods/topSellingFood");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="w-16 my-[20%] h-16 mx-auto border-4 border-dashed rounded-full animate-spin border-mainColor"></div>
    );
  }

  return (
    <div className="bg-[#0e1936]">
        <div className="mx-auto  max-w-screen-xl px-4 py-6">
      <h1 className=" md:text-4xl text-center text-2xl font-bold py-10 text-light">Most Popular Items</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2 lg:gap-8">
        {popularItem?.map((food) => (
          <AllCards key={food._id} food={food}></AllCards>
        ))}
      </div>
     <div className="text-center"> <Link to={'/All Food'} > <button  className="px-8 my-10 py-2 font-medium uppercase bg-mainColor border-none hover:bg-mainColor rounded text-light">
                See All
              </button>{" "}</Link></div>
    </div>
    </div>
  );
};

export default TopSelling;
