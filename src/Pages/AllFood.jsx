import { useLoaderData } from "react-router-dom";
import AllCards from "../Components/Card/AllCards";
import useAxios from "../Hooks/useAxios";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
const AllFood = () => {
  const axios = useAxios();
  const [foods, setFoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSetSearchText] = useState("");
  const { totalItem } = useLoaderData();
  const numberOfItemInPage = 9;
  const numberOfpages = Math.ceil(totalItem / numberOfItemInPage);
  const pages = [...Array(numberOfpages).keys()];

  const handlePageination = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/v1/foods?page=${currentPage}&size=${numberOfItemInPage}`
      )
      .then((response) => {
        setFoods(response.data);
      });
  }, [axios, currentPage, numberOfItemInPage]);

  // Get and set Search Text
  const getInputText = (e) => {
    const inputText = e.target.value;
    setSetSearchText(inputText);
  };

  // SearchHandler
  const handleSearch = () => {
    axios
      .get(`http://localhost:5000/api/v1/food?FoodName=${searchText}`)
      .then((res) => setFoods(res.data));
  };

  const { data, isLoading } = useQuery({
    queryKey: ["foood"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/api/v1/foods?page=${currentPage}&size=${numberOfItemInPage}`
      );
      return res;
    },
  });

  if (isLoading) {
    return (
      <div className="w-16 my-[20%] h-16 mx-auto border-4 border-dashed rounded-full animate-spin border-mainColor"></div>
    );
  }
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="bg-dark my-5 px-6 rounded md:flex items-center justify-between md:pb-0 pb-5">
        <h1 className="md:text-3xl text-2xl text-light font-bold text-left md:py-10 py-5">
          Explore Our All Foods
        </h1>

        <div className="relative w-full max-w-sm">
          <label htmlFor="Search" className="sr-only">
            {" "}
            Search{" "}
          </label>
          <input
            onChange={getInputText}
            type="text"
            id="Search"
            placeholder="Search for food..."
            className="w-full  rounded-md  border-gray-200 focus:outline-none px-4 py-3 shadow-sm text-sm"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button
              onClick={handleSearch}
              type="button"
              className="text-dark  hover:text-gray-700"
            >
              <span className="sr-only">Search</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
        {foods.length < 1 ? (
          <div className="col-span-6 px-4">
            <img
              src="https://i.postimg.cc/xjLw08dh/global-warming-flatline-a4945.png"
              className="mx-auto w-[50%]"
              alt=""
            />
            <h1 className="md:text-3xl text-xl font-bold text-center ">
              Oppss! No macthing foods with this name
            </h1>
          </div>
        ) : (
          foods?.map((food) => <AllCards key={food._id} food={food}></AllCards>)
        )}
      </div>

      {/* Paginations */}

      <div className="flex justify-center space-x-5 text-gray-100 py-10">
        <button
          title="previous"
          type="button"
          onClick={handlePrev}
          className="inline-flex hover:bg-mainColor items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {pages?.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => handlePageination(page)}
            className={`inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md bg-gray-900 ${
              page === currentPage ? "activeBtn" : ""
            }`}
          >
            {page}
          </button>
        ))}

        <button
          title="next"
          type="button"
          onClick={handleNext}
          className="inline-flex hover:bg-mainColor items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md bg-gray-900 border-gray-800"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AllFood;
