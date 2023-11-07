import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import AllCards from "../AllFood/AllCards";

const MyAddedItem = () => {
  const { user } = useAuth();
  const axios = useAxios();

  const handleModal = () => {
    const modal = document.getElementById("my_modal_5");
    if (modal) {
      modal.showModal();
    }
  };

  const { data: myaddedItem, isLoading } = useQuery({
    queryKey: ["MyAddedFood"],
    queryFn: async () => {
      const res = await axios.get(
        `/foods/myaddedItem?MadeByEmail=${user?.email}`
      );
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="w-16 my-[20%] h-16 mx-auto border-4 border-dashed rounded-full animate-spin border-mainColor"></div>
    );
  }
  return (
    <div className="min-h-screen bg-[#152346]">
      <div className="mx-auto max-w-screen-xl px-4 ">
        <div className="px-6 rounded md:flex items-center justify-between">
          <h1 className="md:text-4xl text-2xl flex gap-2 text-light font-bold text-left md:py-10 py-5">
            My Added Food Items
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2 lg:gap-8">
          {myaddedItem?.map((food) => (
            <AllCards
              key={food._id}
              food={food}
              handleModal={handleModal}
            ></AllCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAddedItem;
