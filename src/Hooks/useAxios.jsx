import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import auth from "../Firebase/firebase.config";
import { Navigate } from "react-router-dom";
const instance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

const useAxios = () => {
  useEffect(() => {
    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        if (err.response.status === 401 || err.response.status === 403) {
          signOut(auth)
            .then(() => {
              <Navigate key={"/Login"}></Navigate>;
            })
            .catch((err) => console.log(err));
        }
      }
    );
  }, []);

  return instance;
};

export default useAxios;
