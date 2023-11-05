/* eslint-disable react/prop-types */
const AllCards = ({food}) => {
  const { FoodName, FoodImage, FoodCategory, Price, Quantity, }= food

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
            <div className="badge badge-neutral">Stock: {Quantity}</div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${Price}
            </span>
            <a
             
              className="text-white btn btn-sm bg-mainColor hover:bg-mainColor normal-case text-light"
            >
              Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCards;
