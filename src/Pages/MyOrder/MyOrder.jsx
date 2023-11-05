import useAuth from "../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { BsCartCheckFill } from "react-icons/bs";
import MyOrderCard from "./MyOrderCard";
import swal from "sweetalert";
import useAxios from "../../Hooks/useAxios";
import { useQueryClient } from "@tanstack/react-query";
const MyOrder = () => {
  const { user } = useAuth();
  const axios = useAxios();
  console.log(user?.email);
  const queryClient = useQueryClient();
  const handleCancelOrder = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, your Order will be canceled",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`/foods/myOrder/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            swal("Ummm! Your Order has successfully canceled!", {
              icon: "success",
            });
            queryClient.invalidateQueries("myOrder");
          }
        });
      }
    });
  };

  const { isLoading, data: myOrder } = useQuery({
    queryKey: ["myOrder"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/api/v1/foods/myOrder?customerEmail=${user?.email}`
      );
      return res.json();
    },
  });

  if (isLoading) {
    return (
      <div className="w-16 my-[20%] h-16 mx-auto border-4 border-dashed rounded-full animate-spin border-mainColor"></div>
    );
  }

  console.log(myOrder);
  return (
    <div className="bg-dark min-h-screen">
      <div className="mx-auto max-w-screen-xl ">
        <h1 className="md:text-4xl text-2xl  font-bold py-14 text-light flex items-center gap-3 justify-center">
          My Orders
          <BsCartCheckFill className="text-3xl text-mainColor"></BsCartCheckFill>
        </h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          {myOrder?.length < 1 ? (
            <div className="col-span-6 px-4">
              <img
                src="https://i.postimg.cc/xjLw08dh/global-warming-flatline-a4945.png"
                className="mx-auto w-[50%]"
                alt=""
              />
              <h1 className="md:text-3xl text-xl font-bold text-light text-center ">
                Oppss! No macthing foods with this name
              </h1>
            </div>
          ) : (
            myOrder?.map((orders) => (
              <MyOrderCard
                key={orders._id}
                handleCancelOrder={handleCancelOrder}
                orders={orders}
              ></MyOrderCard>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
