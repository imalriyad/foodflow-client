import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import AllCards from "../AllCards";


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
    <div className="mx-auto max-w-screen-xl">
      <h1 className="text-center text-4xl font-bold">Most Popular Items</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        {popularItem?.map((food) => (
          <AllCards key={food._id} food={food}></AllCards>
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
