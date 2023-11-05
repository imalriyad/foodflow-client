import { useLoaderData } from "react-router-dom";
import {BsCartCheckFill} from 'react-icons/bs'
const Order = () => {
  const loadedData = useLoaderData();
  const {
    _id,
    FoodName,
    FoodImage,
    FoodCategory,
    Price,
    FoodOrigin,
    MadeBy,
    description,
  } = loadedData;

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12 bg-base-200 h-screen drop-shadow-md">
        <h1 className="md:text-4xl text-2xl text-center font-bold py-14 flex items-center gap-3 justify-center">Confirm your order <BsCartCheckFill className="text-3xl text-mainColor"></BsCartCheckFill></h1>
       <div className="flex lg:flex-row gap-6 flex-col items-center justify-center mx-auto max-w-screen-xl px-4 md:px-8">
         <div >
          <form className="mx-auto grid max-w-screen-md gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Your Name
              </label>
              <input
                name="name"
                readOnly
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none "
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Your Email
              </label>
              <input
              readOnly
                name="email"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none "
              />
            </div>
            <div>
              <label
                htmlFor="FoodName"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Food Name
              </label>
              <input
                name="FoodName"
                placeholder="Food Name"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none "
              />
            </div>

            <div>
              <label
                htmlFor="Price"
               
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Price
              </label>
              <input
                name="Price"
                placeholder="Food Price"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none "
              />
            </div>
            <div>
              <label
                htmlFor="Quantity"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Quantity
              </label>
              <input
                name="Quantity"
                placeholder="Food Quantity"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none "
              />
            </div>

            <div>
              <label
                htmlFor="Order Date"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Order Date
              </label>
              <input
                name="OrderDate"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none "
              />
            </div>

            <div className="flex items-center justify-between sm:col-span-2">
           
            <button 
              type="submit"
              className="text-white btn w-full  bg-mainColor hover:bg-mainColor normal-case text-light"
            >
             Confirm Order
            </button>
          </div>
        
          </form>
        </div>
        <div className="flex-1">
            <img src="https://i.postimg.cc/zv3YfVGQ/order-confirmed-monochromatic-fe692.png" className= "mx-auto w-[90%]" alt="" />
        </div>
       </div>
      </div>
    </div>
  );
};

export default Order;
