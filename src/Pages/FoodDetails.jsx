import { Link, useLoaderData, useParams } from "react-router-dom";
import { MdFastfood } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import { Helmet } from "react-helmet-async";
const FoodDetails = () => {
  const loadedData = useLoaderData();
  const { id } = useParams();
  const axios = useAxios();
  const { data,isLoading } = useQuery({
    queryKey: ["topSellingFood"],
    queryFn: async () => {
      const res = await axios.get(`/foods/topSellingFood/${id}`);
      return res.data;
    },
  });
  const {
    _id,
    FoodName,
    FoodImage,
    FoodCategory,
    Price,
    FoodOrigin,
    description,
    Quantity,
  } =  data ||loadedData

  if (isLoading) {
    return (
      <div className="w-16 my-[20%] h-16 mx-auto border-4 border-dashed rounded-full animate-spin border-mainColor"></div>
    );
  }

  return (
    <div className="max-w-screen-xl px-4 py-10 mx-auto">
        <Helmet>
        <title>FoodFlow | {FoodName}</title>
      </Helmet>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={FoodImage}
            className="object-cover w-full md:h-[450px] h-[250px]"
            alt="Album"
          />
        </figure>
        <div className="card-body md:p-8 p-5 lg:w-4/12">
          <h2 className="card-title md:text-4xl text-3xl mb-3">{FoodName}</h2>
          <p className="text-sm md:text-base text-[#72879d]">{description}</p>
          <div className="flex flex-wrap items-center gap-4 mt-2.5 mb-5">
            <div className="badge badge-neutral">{FoodCategory}</div>
            <div className="badge badge-neutral">{FoodOrigin}</div>
            <div className={`badge ${Quantity === 0 ? 'badge-error':'badge-neutral'}`}>Stock {Quantity}</div>
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            ${Price}
          </p>

          <div className="card-actions justify-end mt-5">
            <Link
              to={`/order/${_id}`}
              className="btn w-full flex normal-case items-center bg-mainColor border-none hover:bg-mainColor rounded text-light"
            >
              Order Now<MdFastfood className="text-2xl"></MdFastfood>
            </Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
