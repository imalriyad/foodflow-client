/* eslint-disable react/no-unescaped-entities */
import {BiSolidLeftArrow} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
const ErorrPage = () => {
  const naviagte = useNavigate()
  const goHome =()=>{
    naviagte('/')
  }
  return (
    <div className='bg-dark'>
      <div className="grid min-h-screen px-4 bg-white place-content-center">
        <div className="text-center">
          <img
            className="w-auto  mx-auto text-black h-64"
            src="https://i.postimg.cc/ZKR9ns9G/bubble-gum-error-404.gif"
            alt=""
          />

          <h1 className=" text-light md:text-6xl text-4xl font-bold tracking-tight text-gray-900 ">
            Uh-Noo!
          </h1>

          <p className="mt-4 text-gray-500 text-light text-xl md:text-4xl ">We can't find that page.</p>
          <button onClick={goHome} className="btn md:btn-md btn-sm mt-4  bg-mainColor text-light hover:bg-mainColor border-none"><BiSolidLeftArrow className='text-xl'></BiSolidLeftArrow> Back To Home</button>
        </div>
      </div>
    </div>
  );
};

export default ErorrPage;
