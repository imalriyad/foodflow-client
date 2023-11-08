import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import useAxios from "../Hooks/useAxios";
const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const axios = useAxios();

  const handleGoogleLogin = () => {
    const toastId = toast.loading("logging....");
    googleLogin()
      .then((res) => {
        toast.success("Logged in Successful", { id: toastId });
        const user = res.user;
        const userMail = { email: user.email };
        axios.post("/jwt-token", userMail).then((res) => console.log(res.data));
        navigate(state ? state : "/");
      })
      .catch((err) =>
        toast.error(`${err.message.slice(17).replace(")", "")}`, {
          id: toastId,
        })
      );
  };
  return (
    <>
      <button onClick={handleGoogleLogin} className="btn w-full rounded">
        <img
          src="https://i.postimg.cc/NfrS3Wtd/pngwing-com-1.png"
          className="w-[23px]"
          alt=""
        />
        continue with google
      </button>
    </>
  );
};

export default GoogleLogin;
