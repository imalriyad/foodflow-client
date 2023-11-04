import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    const toastId = toast.loading("logging....");
    googleLogin()
      .then(() => {
        toast.success("Logged in Successful", { id: toastId });
        navigate("/");
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
