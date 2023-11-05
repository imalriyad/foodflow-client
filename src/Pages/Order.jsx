import { useLoaderData } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import DateTimePicker from "react-datetime-picker";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import useAxios from "../Hooks/useAxios";
import swal from 'sweetalert';

const Order = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const loadedData = useLoaderData();
  const { FoodName, Price,FoodImage ,FoodCategory,MadeBy,FoodOrigin} = loadedData;
  const [value, onChange] = useState(new Date());

  const handleOrder = (e) => {
    e.preventDefault();
    const customerName = e.target.name.value;
    const customerEmail = e.target.email.value;
    const FoodName = e.target.foodName.value;
    const Price = e.target.Price.value;
    const ordereduantity = e.target.Quantity.value;
    const orderTime = value;
    const newOrder = {
      customerName,
      customerEmail,
      FoodName,
       Price,
      ordereduantity,
      orderTime,
      FoodImage,
      FoodCategory,
      MadeBy,
      FoodOrigin
    };
    axios.post("foods/order", newOrder).then((res) => {
      if(res.data.insertedId){
        swal({
          title: "Greetings!",
          text: `Your ${FoodName} Order has been placed`,
          icon: "success",
          button: "Okay",
        });
      }
    });
  };

  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12 bg-dark h-screen drop-shadow-md">
        <h1 className="md:text-4xl text-2xl  font-bold py-14 text-light flex items-center gap-3 justify-center">
          Confirm your order{" "}
          <BsCartCheckFill className="text-3xl text-mainColor"></BsCartCheckFill>
        </h1>
        <div className="flex lg:flex-row gap-6 flex-col items-center justify-center mx-auto max-w-screen-xl px-4 md:px-8">
          <div>
            <form
              onSubmit={handleOrder}
              className="mx-auto grid max-w-screen-md gap-5 sm:grid-cols-2"
            >
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
                  name="foodName"
                  defaultValue={FoodName}
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
                  defaultValue={"$" + Price}
                  placeholder="Food Price"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none "
                />
              </div>

              <div>
                <label
                  htmlFor="Quantity"
                  className="mb-2 inline-block text-sm text-light sm:text-base"
                >
                  Quantity
                </label>
                <input
                  name="Quantity"
                  required
                  placeholder="Food Quantity"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none "
                />
              </div>

              <div>
                <label
                  htmlFor="Order Date"
                  className="mb-2 inline-block text-sm text-light sm:text-base"
                >
                  Order Date
                </label>
                <div className="bg-gray-50 ">
                  <DateTimePicker
                    className={
                      "w-full rounded p-1  bg-light border text-dark text-sm outline-none"
                    }
                    onChange={onChange}
                    value={value}
                  />
                </div>
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
            <img
              src="https://i.postimg.cc/zv3YfVGQ/order-confirmed-monochromatic-fe692.png"
              className="mx-auto w-[90%]"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
