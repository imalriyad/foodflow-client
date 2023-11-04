const ResetPass = () => {
  return (
    <section className="relative z-10 overflow-hidden bg-black text-white py-5 lg:py-[40px]">
      <div className="container mx-auto">
        <div className="flex justify-between flex-row-reverse mx-2">
          <img
              src="https://i.postimg.cc/T3v1FCdZ/undraw-Mobile-login-re-9ntv.png"
            className="px-4 w-[50%] object-contain lg:block hidden"
            alt=""
          />
          <div className="px-4 xl:w-[30%] lg:w-2/3 w-full">
            <div className="relative  rounded-lg shadow-lg dark:bg-dark-2 ">
              <form>
                <h1 className="text-4xl font-bold py-6 text-mainColor">
                  Reset Password
                </h1>

                <div className="mb-6">
                  <span className="font-semibold text-secondColor">
                    Your Email
                  </span>
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    required
                    className="border-stroke mt-2 text-black text-body-color focus:border-mainColor w-full rounded border py-3 px-[14px] text-sm outline-none "
                  />
                </div>

                <div className="mt-3">
                  <button
                    type="submit"
                    className="w-full p-3 transition rounded bg-mainColor font-bold text-black hover:bg-opacity-90"
                  >
                    Send Reset Link
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPass;
