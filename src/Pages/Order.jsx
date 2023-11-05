import { useLoaderData } from "react-router-dom";
import {BsCartCheckFill} from 'react-icons/bs'
import useAuth from "../Hooks/useAuth";
const Order = () => {
    const {user} = useAuth()
    console.log(user);
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
      <div className="bg-white py-6 sm:py-8 lg:py-12 bg-dark h-screen drop-shadow-md">
        <h1 className="md:text-4xl text-2xl  font-bold py-14 text-light flex items-center gap-3 justify-center">Confirm your order <BsCartCheckFill className="text-3xl text-mainColor"></BsCartCheckFill></h1>
       <div className="flex lg:flex-row gap-6 flex-col items-center justify-center mx-auto max-w-screen-xl px-4 md:px-8">
         <div >
          <form className="mx-auto grid max-w-screen-md gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 inline-block text-sm text-light sm:text-base"
              >
                Your Name
              </label>
              <input
                name="name"
                defaultValue={user?.displayName}
                readOnly
                className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none "
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 inline-block text-sm text-light sm:text-base"
              >
                Your Email
              </label>
              <input
              readOnly
                name="email"
                defaultValue={user?.email}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm
                 outline-none "
              />
            </div>
            <div>
              <label
                htmlFor="FoodName"
                className="mb-2 inline-block text-sm text-light sm:text-base"
              >
                Food Name
              </label>
              <input
                name="FoodName"
                placeholder="Food Name"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none "
              />
            </div>

            <div>
              <label
                htmlFor="Price"
               
                className="mb-2 inline-block text-sm text-light sm:text-base"
              >
                Price
              </label>
              <input
                name="Price"
                placeholder="Food Price"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none "
              />
            </div>
            
<div className="mx-auto w-full">
  <label htmlFor="example2" className="mb-2 inline-block text-sm text-light sm:text-base">Quantity</label>
  <select id="example2" className="block border bg-gray-50 px-3 py-2  text-sm text-dark outline-none w-full rounded-md border-gray-300 shadow-sm  disabled:cursor-not-allowed disabled:bg-gray-50">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    
  </select>
</div>

            
            <div>
              <label
                htmlFor="Order Date"
                className="mb-2 inline-block text-sm text-light sm:text-base"
              >
                Order Date
              </label>
              <input
                name="OrderDate"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none "
              />
            </div>

            <div className="flex items-center justify-between sm:col-span-2">
           
            <button 
              type="submit"
              className="text-white btn w-full border-none bg-mainColor hover:bg-mainColor normal-case text-light"
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
