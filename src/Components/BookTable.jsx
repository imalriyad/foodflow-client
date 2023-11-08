import swal from "sweetalert";

const BookTable = () => {
  const handleTableBook = (e) => {
    e.preventDefault();
    swal("yay!", "Ummm! Your Booking has successfully Done!", {
      icon: "success",
    });

    e.target.reset();
  };
  return (
    <div className="py-20">
      <div className=" mx-auto max-w-screen-xl px-4">
        <div className="md:flex gap-6 items-start justify-between">
          <div className="md:w-8/12 h-[400px]">
            <img
              src="https://img.freepik.com/premium-photo/nice-couple-are-sitting-together-restaurant-she-is-drinking-some-tea-looking-menu-while-her-biyfriend-is-trying-pick-food-them-also-he-is-giving-food-advices-her_152404-3450.jpg?w=2000"
              alt=""
              className="h-full object-cover rounded-md"
            />
          </div>
          <form
            onSubmit={handleTableBook}
            className="grid gap-5 grid-cols-2 w-full"
          >
            <h1 className="text-dark col-span-2 md:text-5xl text-2xl md:mt-0 mt-5 text-center font-bold">
              {" "}
              Book A Table Online
            </h1>
            <input
              type="text"
              required
              placeholder="Your Name"
              className="input focus:outline-none input-bordered w-full "
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              className="input focus:outline-none input-bordered w-full "
            />
            <input
              type="number"
              required
              placeholder="Your Phone Number"
              className="input focus:outline-none input-bordered w-full "
            />
            <select
              required
              className="select  select-bordered focus:outline-none w-full"
            >
              <option disabled selected>
                Number of People
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            <textarea
              required
              placeholder="Special Request"
              rows={3}
              className="textarea focus:outline-none col-span-2 textarea-bordered textarea-md w-full"
            ></textarea>
            <button
              type="submit"
              className="btn bg-mainColor hover:bg-mainColor col-span-2 w-full"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
