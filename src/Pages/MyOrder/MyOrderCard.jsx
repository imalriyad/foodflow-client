/* eslint-disable react/prop-types */

const MyOrderCard = ({ orders,handleCancelOrder }) => {
  const { _id, FoodName, FoodImage, FoodCategory, Price,orderTime,MadeBy,orderedQuantity} = orders;

 
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
          <div className="flex flex-wrap items-center gap-3 mt-2.5 mb-5">
            <div className="badge badge-neutral">{FoodCategory}</div>
            <div className="badge badge-neutral">{orderTime.slice(0,10)}</div>
            <div className="badge badge-neutral">{MadeBy}</div>
            <div className="badge badge-neutral">Quantity: {orderedQuantity}</div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              ${Price}
            </span>
            <button
             onClick={()=> handleCancelOrder(_id)}
              className="text-white btn  btn-sm bg-mainColor hover:bg-mainColor normal-case text-light"
            >
              Cancel Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOrderCard;
