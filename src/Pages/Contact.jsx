import { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_APP_EMAIL_SERVICE_KEY,
        import.meta.env.VITE_APP_EMAIL_TAMPLATE,
        form.current,
        import.meta.env.VITE_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            swal(
              "Yay!",
              `Thank you for reaching out!Your message 
              has been received.I'll get back to you as
              soon as possible.Your patience is appreciated!`,
              "success"
            );
            e.target.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex lg:flex-row flex-col mx-auto max-w-screen-xl">
      <div>
        <img src="https://i.postimg.cc/RFrqt2k3/network-two-color.png" alt="" />
      </div>
      <div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                Get in touch
              </h2>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2"
            >
              <div>
                <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  First name*
                </label>
                <input
                  name="first-name"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none "
                />
              </div>

              <div>
                <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Last name*
                </label>
                <input
                  name="from_name"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none "
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Email*
                </label>
                <input
                  name="from_email"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none "
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Subject*
                </label>
                <input
                  name="subject"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none "
                />
              </div>

              <div className="sm:col-span-2">
                <label className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Message*
                </label>
                <textarea
                  name="message"
                  className=" w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none "
                ></textarea>
              </div>

              <div className="flex items-center justify-between sm:col-span-2">
                <button className="inline-block bg-mainColor hover:bg-mainColor btn w-full rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
