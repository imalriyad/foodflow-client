import { Link, useLocation } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { HiDocumentSearch } from "react-icons/hi";
import Modal from "./Modal";

/* eslint-disable react/prop-types */
const AllCards = ({ food, handleModal }) => {
  const { _id, FoodName, FoodImage, FoodCategory, Price, Quantity } = food;
  const { pathname } = useLocation();

  return (
    <>
      <div className=" bg-light border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="h-[200px]">
          <img
            className="p-4 h-full w-full rounded-3xl object-cover "
            src={FoodImage}
            alt="product image"
          />
        </div>
        <div className="px-5 pb-5">
          <p>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {FoodName}
            </h5>
          </p>
          <div className="flex items-center gap-x-4 mt-2.5 mb-5">
            <div className="badge badge-neutral">{FoodCategory}</div>
            <div
              className={`badge ${
                Quantity === 0 ? "badge-error" : "badge-neutral"
              }`}
            >
              Stock: {Quantity}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              ${Price}
            </span>
            {pathname === "/MyAddedFood" ? (
              <button
                onClick={handleModal}
                className="text-white gap-1 btn btn-sm bg-mainColor hover:bg-mainColor normal-case text-light"
              >
                Update<FaEdit></FaEdit>
              </button>
            ) : (
              ""
            )}

            <Modal id={_id}></Modal>
            <Link
              to={`/FoodDetails/${_id}`}
              className="text-white btn btn-sm gap-0 bg-mainColor hover:bg-mainColor normal-case text-light"
            >
              Details<HiDocumentSearch></HiDocumentSearch>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCards;
