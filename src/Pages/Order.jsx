import { useLoaderData } from "react-router-dom";
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
  console.log(loadedData);
  return (
    <div>
    
    </div>
  );
};

export default Order;
