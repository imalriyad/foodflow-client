import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import swal from "sweetalert";
import { Helmet } from "react-helmet-async";

const AddFood = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");
  const [origin, setOrigin] = useState("");

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  const handleOrigin = (e) => {
    setOrigin(e.target.value);
  };

  const handleAddFood = (e) => {
    e.preventDefault();
    const FoodName = e.target.foodName.value;
    const FoodImage = e.target.FoodImage.value;
    const Price = parseInt(e.target.Price.value)
    const description = e.target.description.value;
    const MadeBy = e.target.MadeBy.value;
    const MadeByEmail = e.target.MadeByEmail.value;
    const Quantity = parseInt(quantity);
    const FoodCategory = category;
    const OrderCount = 0;
    const FoodOrigin = origin;
    const newProduct = {
      FoodName,
      FoodImage,
      Price,
      description,
      MadeBy,
      MadeByEmail,
      Quantity,
      FoodCategory,
      OrderCount,
      FoodOrigin,
    };

    axios.post("/foods/addItem", newProduct).then((res) => {
      if (res.data.insertedId) {
        swal("Congo!", "Your Item has successfully added!", "success");
        e.target.reset();
      }
    });
  };
  return (
    <div className="mx-auto max-w-screen-xl">
       <Helmet>
        <title>FoodFlow | Add a Food</title>
      </Helmet>
      <div className="bg-dark my-5 px-6 rounded md:flex items-center justify-between md:pb-0 pb-5">
        <h1 className="md:text-3xl text-2xl text-light font-bold text-left md:py-10 py-5">
          Add a Food Item
        </h1>
      </div>
      <div className="flex lg:flex-row gap-6 flex-col items-center justify-center mx-auto max-w-screen-xl px-4 md:px-8">
        <div>
          <form
            onSubmit={handleAddFood}
            className="mx-auto grid max-w-screen-md gap-5 sm:grid-cols-2"
          >
            <div>
              <label
                htmlFor="FoodName"
                className="mb-2 inline-block text-sm text-dark sm:text-base"
              >
                Food Name
              </label>
              <input
                name="foodName"
                placeholder="Food Name"
                required
                className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none "
              />
            </div>

            <div>
              <label
                htmlFor="Price"
                className="mb-2 inline-block text-sm text-dark sm:text-base"
              >
                Food Price
              </label>
              <input
                name="Price"
                type="number"
                required
                placeholder="Food Price"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none "
              />
            </div>

            <div>
              <label
                htmlFor="Quantity"
                className="mb-2 inline-block text-sm text-dark sm:text-base"
              >
                Stock Quantity
              </label>
              <select
                onChange={handleQuantity}
                id="example7"
                required
                value={quantity}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none"
              >
                <option>Select Food Quantity</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15 </option>
                <option value="20">20 </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="FoodCategory"
                className="mb-2 inline-block text-sm text-dark sm:text-base"
              >
                Food Category
              </label>
              <select
                id="example7"
                required
                onChange={handleCategory}
                value={category}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none"
              >
                <option value="">Select Food Category</option>
                <option value="Seafood">Seafood</option>
                <option value="Salad">Salad </option>
                <option value="Dessert">Dessert </option>
                <option value="Pizza">Pizza</option>
                <option value="Burger">Burger</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="FoodOrigin"
                className="mb-2 inline-block text-sm text-dark sm:text-base"
              >
                Food Origin
              </label>
              <select
                id="example7"
                required
                onChange={handleOrigin}
                value={origin}
                className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none"
              >
                <option value="">Select Food Origin</option>
                <option value="Thai">Thai</option>
                <option value="Italian">Italian</option>
                <option value="Japanese">Japanese </option>
                <option value="American">American </option>
                <option value="Mexican">Mexican </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="FoodOrigin"
                className="mb-2 inline-block text-sm text-dark sm:text-base"
              >
                Food Image
              </label>
              <input
                name="FoodImage"
                required
                placeholder="Food Image Url"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none "
              />
            </div>
            <div>
              <label
                htmlFor="MadeBy"
                className="mb-2 inline-block text-sm text-dark sm:text-base"
              >
                Made By
              </label>
              <input
                name="MadeBy"
                required
                defaultValue={user?.displayName}
                readOnly
                className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none "
              />
            </div>
            <div>
              <label
                htmlFor="MadeByEmail"
                className="mb-2 inline-block text-sm text-dark sm:text-base"
              >
                Made By Email
              </label>
              <input
                name="MadeByEmail"
                defaultValue={user?.email}
                readOnly
                required
                className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none "
              />
            </div>

            <div className="col-span-full">
              <label
                htmlFor="description"
                className="mb-2 inline-block text-sm text-dark sm:text-base"
              >
                Food Ingredients
              </label>
              <textarea
                id="bio"
                rows={3}
                name="description"
                required
                placeholder="Write About The Foood Ingredients"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-dark text-sm outline-none "
              ></textarea>
            </div>

            <div className="flex items-center justify-between sm:col-span-2">
              <button
                type="submit"
                className="text-white btn w-full border-none bg-mainColor hover:bg-mainColor normal-case text-light"
              >
                Add This Food
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1">
          <img
            src="https://i.postimg.cc/tRDDQXq1/fast-food-monochromatic.png"
            className="mx-auto w-[90%]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AddFood;
