import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const link = ["Home", "All Food", "Menu", "Blog", "Contact"];
  const menuLink = link.map((item) => (
    <NavLink
      key={item}
      className="font-medium text-blue-500"
      aria-current="page"
    >
      {item}
    </NavLink>
  ));

  return (
    <div className="bg-dark">
      <header className="flex flex-wrap text-light sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-base py-4 dark:bg-gray-800">
        <nav
          className="max-w-screen-xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link
              to={"/"}
              className="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white"
              href=""
            >
              <img
                className="w-20"
                src="https://i.postimg.cc/fWPGZNTp/foodflow.png"
                alt="Logo"
              />
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2  focus:ring-offset-mainColor focus:text-mainColor transition-all text-sm dark:hover:bg-mainColor dark:border-mainColor dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-mainColor"
                onClick={toggleMenu}
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden w-4 h-4"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-image-and-text-2"
            className={`hs-collapse ${
              isMenuOpen ? "block" : "hidden"
            } overflow-hidden transition-all duration-300 basis-full grow sm:block`}
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center w-full gap-4 lg:gap-6 ">
                {menuLink}
                
              </div>
            </div>
          </div>
          {/* Drop down */}
          <div className="flex items-center gap-5 md:mt-0 mt-3 justify-between">
            {" "}
            <button className=" bg-mainColor px-6 py-2 rounded normal-case hover:bg-mainColor text-light border-none">
              Login
            </button>
            <div className="dropdown dropdown-end ">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-md  space-y-3 dropdown-content mt-3 z-[1] p-2 shadow bg-dark text-light rounded-box w-52 "
              >
                <Link to={'/'}>
                <button className="btn btn-sm hover:bg-dark bg-dark  w-full text-light">Setting</button>
                </Link>
                <Link to={'/'}>
                <button className="btn  btn-sm hover:bg-dark bg-dark  w-full text-light">Logout</button>
                </Link>
                
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
