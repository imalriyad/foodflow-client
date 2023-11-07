import { useLoaderData, useParams } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import DateTimePicker from "react-datetime-picker";
import useAuth from "../Hooks/useAuth";
import { useState } from "react";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import useAxios from "../Hooks/useAxios";
import swal from "sweetalert";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useQueryClient } from "@tanstack/react-query";
const Order = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const { id } = useParams();
  const loadedData = useLoaderData();
  const [orderedquantity, setOrderQuantity] = useState(0);
  const queryClient = useQueryClient();
  const handleOrderedQuantity = (e) => {
    setOrderQuantity(e.target.value);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["topSellingFood"],
    queryFn: async () => {
      const res = await axios.get(`/foods/topSellingFood/${id}`);
      return res.data;
    },
  });
  const {
    _id,
    FoodName,
    Price,
    FoodImage,
    FoodCategory,
    MadeBy,
    FoodOrigin,
    Quantity,
    MadeByEmail,
    description,
    OrderCount,
  } = data || loadedData;
  const [value, onChange] = useState(new Date());

  if (isLoading) {
    return (
      <div className="w-16 my-[20%] h-16 mx-auto border-4 border-dashed rounded-full animate-spin border-mainColor"></div>
    );
  }

  const handleOrder = (e) => {
    e.preventDefault();
    const customerName = e.target.name.value;
    const customerEmail = e.target.email.value;
    const FoodName = e.target.foodName.value;
    const price = e.target.Price.value;
    const Price = price.slice(1);
    const orderedQuantity = parseInt(orderedquantity);

    if (Quantity === 0) {
      swal({
        title: "Opss!",
        text: "This item is out of stock!",
        icon: "error",
        button: "Okay",
      });
      return;
    }

    if (orderedQuantity > Quantity) {
      swal({
        title: "Opss!",
        text: "Requested Quantity is not available",
        icon: "error",
        button: "Okay",
      });
      return;
    }

    if (user?.email === MadeByEmail) {
      swal({
        title: "Opss!",
        text: "You Cant buy a foods you have added by own!",
        icon: "error",
        button: "Okay",
      });
      return;
    }

    if (orderedQuantity <= Quantity) {
      const newOrder = {
        customerName,
        customerEmail,
        FoodName,
        Price,
        orderedQuantity,
        orderTime: value,
        FoodImage,
        FoodCategory,
        MadeBy,
        FoodOrigin,
        Quantity,
        description,
        OrderCount,
      };

      axios.post("foods/order", newOrder).then((res) => {
        if (res.data.insertedId) {
          const newQuantity = Quantity - orderedQuantity;
          const item = {
            Quantity: newQuantity,
            OrderCount: (OrderCount || 0) + orderedQuantity,
          };
          axios.put(`/foods/${_id}`, item);
          swal({
            title: "Greetings!",
            text: `Your ${FoodName} Order has been placed`,
            icon: "success",
            button: "Okay",
          });
          queryClient.invalidateQueries("myOrder");
          e.target.reset();
        }
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>FoodFlow | Confirm Order</title>
      </Helmet>
      <div className="bg-white py-6 sm:py-8 lg:py-12 bg-dark h-screen drop-shadow-md">
        <h1 className="md:text-4xl text-2xl max-w-screen-xl mx-auto pl-8  font-bold py-14 text-light flex items-center gap-3 lg:justify-start justify-center">
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
                  htmlFor="orderedQuantity"
                  className="mb-2 inline-block text-sm text-light sm:text-base"
                >
                  Order Quantity
                </label>
                <select
                  onChange={handleOrderedQuantity}
                  id="example7"
                  required
                  value={orderedquantity}
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none"
                >
                  <option defaultChecked>Select Order Quantity</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3 </option>
                  <option value="4">4 </option>
                  <option value="5">5 </option>
                  <option value="10">10 </option>
                  <option value="15">15</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="Quantity"
                  className="mb-2 inline-block text-sm text-light sm:text-base"
                >
                  Stock Quantity
                </label>
                <input
                  name="Quantity"
                  required
                  readOnly
                  defaultValue={
                    data.Quantity === undefined
                      ? loadedData?.Quantity
                      : data.Quantity
                  }
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none "
                />
              </div>
              <div>
                <label
                  htmlFor="Quantity"
                  className="mb-2 inline-block text-sm text-light sm:text-base"
                >
                  Made By
                </label>
                <input
                  name="Quantity"
                  required
                  readOnly
                  defaultValue={MadeBy}
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
                    disableClock={true}
                    format="y-MM-dd h:mm:ss"
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
