import { useState } from "react";

const Modal = () => {
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
  return (
    <>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-[#30336b]">
          <h3 className="font-bold md:text-2xl text-lg text-light py-5 text-center">
            Update the food items
          </h3>
          <form className="mx-auto grid max-w-screen-md gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="FoodName"
                className="mb-2 inline-block text-sm text-light sm:text-base"
              >
                Food Name
              </label>
              <input
                name="foodName"
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
            <div>
              <label
                htmlFor="Quantity"
                className="mb-2 inline-block text-sm text-light sm:text-base"
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
                htmlFor="Quantity"
                className="mb-2 inline-block text-sm text-light sm:text-base"
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
                className="mb-2 inline-block text-sm text-light sm:text-base"
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
                className="mb-2 inline-block text-sm text-light sm:text-base"
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

            <div className="flex items-center justify-between sm:col-span-2">
              <button
                type="submit"
                className="text-white btn w-full border-none bg-light hover:bg-light normal-case text-dark"
              >
                Update
              </button>
            </div>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn md:btn-md btn-sm btn-circle absolute top-3 right-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Modal;
